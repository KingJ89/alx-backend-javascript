const countStudents = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2]; // Database file passed via command line

    if (!databaseFile) {
      res.status(500).send('Database file not specified');
      return;
    }

    countStudents(databaseFile)
      .then((data) => {
        res.send(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.status(500).send(`This is the list of our students\n${err.message}`);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2]; // Database file passed via command line
    const { major } = req.params;

    if (!databaseFile) {
      res.status(500).send('Database file not specified');
      return;
    }

    countStudents(databaseFile)
      .then((data) => {
        const lines = data.split('\n').slice(1); // Skip "Number of students" line
        const majorStudents = lines.filter((line) => line.includes(major));

        if (majorStudents.length > 0) {
          res.send(`List of students in ${major}\n${majorStudents.join('\n')}`);
        } else {
          res.status(404).send(`No students found in ${major}`);
        }
      })
      .catch((err) => {
        res.status(500).send(`Error: ${err.message}`);
      });
  }
}

module.exports = StudentsController;

