const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Function to remove all non-numeric characters
function onlyNumbers(str) {
  return str.replace(/[^0-9]/g, '');
}

// Function to remove all non-letter characters (including spaces and punctuation)
function onlyLetters(str) {
  return str.replace(/[^a-zA-Z]/g, '');
}

function onlySpecialCharacters(str) {
  return str.replace(/[a-zA-Z0-9\s]/g, ''); // Keep only special characters
}

// GET route for onlySpecialCharacters
app.get('/api/onlySpecialCharacters', (req, res) => {
  let inputString = req.query.inputString;

  if (!inputString) {
    return res.status(400).json({ error: 'Input string is required as a query parameter.' });
  }

    // Decode the URI component to handle special characters
  try {
    inputString = decodeURIComponent(inputString);
  } catch (error) {
    return res.status(400).json({ error: 'Invalid input string. Could not decode URI component.' });
  }

  const result = onlySpecialCharacters(inputString);
  res.json({ result });
});

// Example using query parameters (GET requests)

app.get('/api/onlyNumbers', (req, res) => {
    const inputString = req.query.inputString;
    console.log(req.query)
    if (!inputString) {
        return res.status(400).json({ error: 'Input string is required as a query parameter.' });
      }
    
      const result = onlyNumbers(inputString);
      res.json({ result });
});

app.get('/api/onlyLetters', (req, res) => {
    const inputString = req.query.inputString;

    if (!inputString) {
        return res.status(400).json({ error: 'Input string is required as a query parameter.' });
      }
    
      const result = onlyLetters(inputString);
      res.json({ result });
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
