const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const headers = lines[0].split(','); // headers are removed
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

        // Total number of students
        console.log(`Number of students: ${students.length}`);

        // Group students by field
        const fields = {};
        students.forEach((student) => {
          if (!fields[student.field]) {
            fields[student.field] = [];
          }
          fields[student.field].push(student.firstname);
        });

        // Print number of students in each field
        for (const [field, names] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
