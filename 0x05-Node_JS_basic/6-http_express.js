const express = require('express');

// Create an Express application
const app = express();

// Define the port for the server
const port = 1245;

// Route for the root URL '/'
app.get('/', (request, response) => {
  // Send a response with a greeting message
  response.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the app for testing or further use
module.exports = app;

