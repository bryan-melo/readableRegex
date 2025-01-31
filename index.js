const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Function to remove all non-numeric characters
function removeNonNumeric(str) {
  return str.replace(/[^0-9]/g, '');
}

// Function to remove all non-letter characters (including spaces and punctuation)
function removeNonLetters(str) {
  return str.replace(/[^a-zA-Z]/g, '');
}

// POST route to remove non-numeric characters
app.post('/api/removeNonNumeric', (req, res) => {
  const { inputString } = req.body;

  if (!inputString) {
    return res.status(400).json({ error: 'Input string is required in the request body.' });
  }

  const result = removeNonNumeric(inputString);
  res.json({ result });
});

// POST route to remove non-letter characters
app.post('/api/removeNonLetters', (req, res) => {
  const { inputString } = req.body;

  if (!inputString) {
    return res.status(400).json({ error: 'Input string is required in the request body.' });
  }

  const result = removeNonLetters(inputString);
  res.json({ result });
});


// Example using query parameters (GET requests)

app.get('/api/removeNonNumeric', (req, res) => {
    const inputString = req.query.inputString;
    console.log(req.query)
    if (!inputString) {
        return res.status(400).json({ error: 'Input string is required as a query parameter.' });
      }
    
      const result = removeNonNumeric(inputString);
      res.json({ result });
});

app.get('/api/removeNonLetters', (req, res) => {
    const inputString = req.query.inputString;

    if (!inputString) {
        return res.status(400).json({ error: 'Input string is required as a query parameter.' });
      }
    
      const result = removeNonLetters(inputString);
      res.json({ result });
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
