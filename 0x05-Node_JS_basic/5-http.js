const http = require('http');
const { readFile } = require('fs/promises');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databaseFile = process.argv[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    try {
      const data = await readFile(databaseFile, 'utf8');
      const lines = data.split('\n').filter((line) => line.trim().length > 0).slice(1);
      const students = lines.map((line) => {
        const [firstname, , , field] = line.split(',');
        return { firstname, field };
      });

      const count = students.length;
      const fields = students.reduce((acc, student) => {
        if (!acc[student.field]) acc[student.field] = [];
        acc[student.field].push(student.firstname);
        return acc;
      }, {});

      res.write('This is the list of our students\n');
      res.write(`Number of students: ${count}\n`);
      for (const [field, names] of Object.entries(fields)) {
        res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
      }
      res.end();
    } catch (err) {
      res.write('This is the list of our students\nCannot load the database\n');
      res.end();
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
