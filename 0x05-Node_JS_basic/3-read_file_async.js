const { readFile } = require('fs').promises;

async function countStudents(fileName) {
  try {
    const data = await readFile(fileName, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines.

    if (lines.length <= 1) {
      throw new Error('No valid student data found.');
    }

    const students = {};
    const dataLines = lines.slice(1); // Skip header line.

    dataLines.forEach((line) => {
      const [name, , , field] = line.split(',');

      if (!field) return; // Skip invalid entries.

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

