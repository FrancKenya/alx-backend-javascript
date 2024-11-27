const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app
module.exports = app;
