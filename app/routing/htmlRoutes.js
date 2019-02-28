/* eslint-disable linebreak-style */
/* eslint-disable func-names */

const path = require('path');

module.exports = function (app) {
  // Path to the survey page
  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  // Path to the home page
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
};
