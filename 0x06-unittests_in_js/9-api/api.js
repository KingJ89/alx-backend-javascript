const express = require('express');
const app = express();

// Define the GET / route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Define the GET /cart/:id route with validation for :id to be a number
app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Handle invalid cart ids (non-numeric)
app.all('/cart/:id', (req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
