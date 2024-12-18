const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

// Use the router
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;

