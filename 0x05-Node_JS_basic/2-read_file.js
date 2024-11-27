const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Extract headers and rows
    const headers = lines[0].split(','); // Ensure headers are removed
    const rows = lines.slice(1);

    const students = rows.map((row) => {
      const values = row.split(',');
      if (values.length !== headers.length) return null; // Skip malformed rows
      return {
        firstname: values[0],
        lastname: values[1],
        age: values[2],
        field: values[3],
      };
    }).filter((student) => student !== null); // Remove null values

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstname);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
