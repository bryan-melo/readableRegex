const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')
const ValidationFunctions = require('./validationFunctions')

const requiredParameterResponse = 'Input string required as a parameter.'

app.use(cors())
app.use(express.json())

/**
 * Global request middlware
 * 
 * Handles decoding of input strings that are using encodeURIComponent on the client side
 * This way we can process special character decoding per request in one spot
 */
app.use((req, res, next) => {
  if (req.path.includes('/api')) {
    if (req.body.inputString) {
      const decodedInputString = getDecodedInputString(req.body.inputString)
      if (decodedInputString === decodeErrorMessage) {
        return getDecodedInputStringErrResponse()
      }
      // override the encoded input string with decoded input string for processing the decoded result in the next step
      req.body.inputString = decodedInputString
    }
  }
  next()
})
// Middleware to parse JSON request bodies
app.use(express.json());
app.set('view engine', 'pug')

const decodeErrorMessage = 'Invalid input string. Could not decode URI component.'


/**
 * Decode the encoded input string
 */
function getDecodedInputString(inputString) {

  // Decode the URI component to handle special characters
  try {
    inputString = decodeURIComponent(inputString);
  } catch (error) {
    return decodeErrorMessage
  }
  // remove leading and ending spaces to 
  return trim(inputString)
}

function getDecodedInputStringErrResponse() {
  return res.status(400).json({ error: decodeErrorMessage })
}

// GET routes for isEmailAddress and isPhoneNumber
app.post('/api/isEmailAddress', (req, res) => {
  let inputString = req.body.inputString;

  if (!inputString) {
    return res.status(400).json({ error: requiredParameterResponse });
  }

  const result = ValidationFunctions.isEmailAddress(inputString);
  res.json({ result });
});

app.post('/api/isPhoneNumber', (req, res) => {
  let inputString = req.body.inputString;

  if (!inputString) {
    return res.status(400).json({ error: requiredParameterResponse });
  }

  const result = ValidationFunctions.isPhoneNumber(inputString);
  res.json({ result });
});


// GET route for onlySpecialCharacters
app.post('/api/onlySpecialCharacters', (req, res) => {
  let inputString = req.body.inputString;

  if (!inputString) {
    return res.status(400).json({ error: requiredParameterResponse });
  }

  const result = ValidationFunctions.onlySpecialCharacters(inputString);
  res.json({ result });
});

// Example using query parameters (GET requests)

app.post('/api/onlyNumbers', (req, res) => {
  const inputString = req.body.inputString;
  if (!inputString) {
    return res.status(400).json({ error: requiredParameterResponse });
  }

  const result = ValidationFunctions.onlyNumbers(inputString);
  res.json({ result });
});

app.post('/api/onlyLetters', (req, res) => {
  const inputString = req.body.inputString;

  if (!inputString) {
    return res.status(400).json({ error: requiredParameterResponse });
  }

  const result = ValidationFunctions.onlyLetters(inputString);
  res.json({ result });
});

app.post('/api/isAlphaNumeric', (req, res) => {
  const { inputString } = req.body;

  if (!inputString) {
    return res.status(400).json({ error: requiredParameterResponse });
  }

  const result = ValidationFunctions.isAlphaNumeric(inputString);
  res.json({ result });
});

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
