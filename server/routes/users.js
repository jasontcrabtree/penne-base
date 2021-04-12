const express = require('express');

const app = express();

const allUsers = [
  { name: 'Ally', age: 31 },
  { name: 'Simon', age: 29 },
  { name: 'Zoe', age: 29 },
  { name: 'Jason', age: 30 },
];

/* GET users listing. */
app.get('/', (req, res) => {
  // res.json({ first: 'Get Users and display em', second: 'Second' });
  res.json(allUsers);
});

module.exports = app;
