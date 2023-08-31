"use strict";

const express = require('express');
const app = express();
const port = 4000

// express get request body and form
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine', 'ejs'); // for rendering html

// variables
const pathViews = __dirname + '/public/views/';

// render html file in public folder
app.get('/', (req, res) => {
  res.render(pathViews + "index");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
})