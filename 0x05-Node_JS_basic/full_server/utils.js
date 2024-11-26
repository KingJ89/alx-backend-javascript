const { readFile } = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.toString().trim().split('\n');
      for (let i = 1; i < lines.length; i += 1) { // Skip header line
        const studentData = lines[i].split(',');

        if (studentData.length >= 4) {
          const [name, , , field] = studentData;
          totalStudents += 1;

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(name);

          fields[field] = (fields[field] || 0) + 1;
        }
      }

      let output = `Number of students: ${totalStudents}\n`;
      for (const [field, count] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${count}. `;
        output += `List: ${students[field].join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}

module.exports = countStudents;
