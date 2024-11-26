const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

// Function to count students from a file
function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let output = '';
        const lines = data.toString().trim().split('\n');

        for (let i = 1; i < lines.length; i += 1) { // Skip the header
          const studentData = lines[i].split(',');

          if (studentData.length >= 4) {
            const [name, , , field] = studentData;
            totalStudents += 1;

            if (students[field]) {
              students[field].push(name);
            } else {
              students[field] = [name];
            }

            fields[field] = (fields[field] || 0) + 1;
          }
        }

        output += `Number of students: ${totalStudents}\n`;
        for (const [field, count] of Object.entries(fields)) {
          output += `Number of students in ${field}: ${count}. `;
          output += `List: ${students[field].join(', ')}\n`;
        }

        resolve(output.trim());
      }
    });
  });
}

// Route: Root
app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

// Route: Students
app.get('/students', (request, response) => {
  const databaseFile = process.argv[2]; // Get file path from command-line arguments

  if (!databaseFile) {
    response.status(500).send('Database file not specified');
    return;
  }

  countStudents(databaseFile)
    .then((output) => {
      response.send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      response.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;

