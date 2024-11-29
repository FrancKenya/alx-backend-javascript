const express = require('express');
const app = express();

// Root route handler
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route: GET /cart/:id
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (/^\d+$/.test(id)) { // Validate id is a number
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});

// Start the server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export app for testing
