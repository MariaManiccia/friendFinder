var friendsArray = require("../data/friends");

module.exports = function(app) {

  // Return all friends
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // Receive friends stats
    var user = req.body;

    // parseInt for scores
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend stats
    var friendIndex = 0;
    var minDiff = 40;

    //  comparing the score
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friendsArray.length; i++) {
      var totalDiff = 0;
      for(var j = 0; j < friendsArray[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friendsArray[i].scores[j]);
        totalDiff += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDiff < minDiff) {
        friendIndex = i;
        minDiff = totalDiff;
      }
    }

    // add user the friend array
    friendsArray.push(user);

    // send the match
    res.json(friendsArray[friendIndex]);
  });
};