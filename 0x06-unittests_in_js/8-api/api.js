const express = require('express');
const app = express();

// Define the GET / route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start the server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
