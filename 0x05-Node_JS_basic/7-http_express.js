const express = require('express');
const fs = require('fs').promises;
const path = require('path');

// Create an Express application
const app = express();

// Function to count students and return the information
const countStudents = async (dbPath) => {
  try {
    // Read the CSV file asynchronously
    const data = await fs.readFile(dbPath, 'utf8');
    
    // Split into lines and filter out empty lines
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');
    
    // Skip the first line (headers)
    const students = lines.slice(1);
    
    const fields = {};
    const allStudents = [];

    // Process each student record
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
      allStudents.push(firstname);
    });

    // Log the total number of students
    console.log(`Number of students: ${allStudents.length}`);

    // Log the number of students per field
    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });

  } catch (error) {
    console.error('Cannot load the database');
  }
};

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the /students endpoint
app.get('/students', (req, res) => {
  const dbPath = req.query.db || 'database.csv'; // Use query parameter for file path or default to 'database.csv'

  // Send plain text
  res.type('text/plain');
  res.send('This is the list of our students\n');

  // Call the countStudents function to process and display student data
  countStudents(dbPath);
});

// Start the server on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app
module.exports = app;
