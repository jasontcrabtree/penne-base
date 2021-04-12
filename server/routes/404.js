const express = require('express');

const app = express();

/* GET 404 route */
app.get('*', (req, res) => {
  res.status(404).json({ info: 'Route doesn\'t exist' });
});

module.exports = app;
