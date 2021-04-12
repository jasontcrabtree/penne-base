const express = require('express');

const app = express();

/* GET default route */
app.get('/', (request, response) => {
  response.json({ info: 'Hello World' });
});

module.exports = app;
