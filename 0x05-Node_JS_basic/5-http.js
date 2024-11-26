const http = require('http');
const { promises: fs } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

async function countStudents(fileName) {
  try {
    const data = await fs.readFile(fileName, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length <= 1) {
      throw new Error('No valid student data found.');
    }

    const students = {};
    const headersSkipped = lines.slice(1); // Skip header row

    headersSkipped.forEach((line) => {
      const [name, , , field] = line.split(',');

      if (!field) return; // Skip invalid rows

      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(name);
    });

    const totalStudents = headersSkipped.length;

    let output = `Number of students: ${totalStudents}\n`;

    for (const [field, names] of Object.entries(students)) {
      output += `Number of students in ${field}: ${names.length}. `;
      output += `List: ${names.join(', ')}\n`;
    }

    return output.trim(); // Trim trailing newline for cleaner output
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');
    try {
      const output = await countStudents(process.argv[2]);
      response.end(output);
    } catch (error) {
      response.statusCode = 404;
      response.end(error.message);
    }
  } else {
    response.statusCode = 404;
    response.end('Resource not found');
  }
});

app.listen(port, hostname, () => {});

module.exports = app;

