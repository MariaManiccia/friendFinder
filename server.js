/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// Connections
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Grabbing express
const app = express();

// Opening the Port
const PORT = process.env.PORT || 8080;

// Instead of error, take to this page
app.use(express.static(`${__dirname}/app/css`));

// Break into different forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// API and HTML routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Checking the Port
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
