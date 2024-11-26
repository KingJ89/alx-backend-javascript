const fs = require('fs');

function countStudents(fileName) {
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('No valid student data found.');
      return;
    }

    const students = {};
    const headers = lines[0].split(','); // Extract headers for better context (optional).
    const dataLines = lines.slice(1);

    dataLines.forEach((line) => {
      const [name, , , field] = line.split(',');

      if (!field) {
        return; // Skip invalid entries.
      }

      if (!students[field]) {
        students[field] = [];
      }

      students[field].push(name);
    });

    console.log(`Number of students: ${dataLines.length}`);

    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

