/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable func-names */

// Connecting with the friends array
const friends = require('../data/friends');

module.exports = function (app) {
  // Grab friends in JSON form
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  });

  // Post the user's scores
  app.post('/api/friends', (req, res) => {
    console.log(req.body.scores);

    // Grabbing the user's information
    const user = req.body;

    // Seperating the scores
    for (let i = 0; i < user.scores.length; i++) {
      // eslint-disable-next-line radix
      user.scores[i] = parseInt(user.scores[i]);
    }

    let friendIndex = 0;
    let minimumDifference = 40;

    // Going through the friends
    for (let i = 0; i < friends.length; i++) {
      let totalDifference = 0;
      // Checking their scores
      for (let j = 0; j < friends[i].scores.length; j++) {
        const difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // checking the differences
      if (totalDifference < minimumDifference) {
        friendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // Push the new user into the friend array
    friends.push(user);

    // Friend results!
    res.json(friends[friendIndex]);
  });
};
