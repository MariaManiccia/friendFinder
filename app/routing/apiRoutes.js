var friends = require("../data/friends");

module.exports = function(app) {

  // GET method
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // POST method
  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // friends stats
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
    for(var i = 0; i < friends.length; i++) {

      var totalDiff = 0;
      
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDiff += difference;
      }

      // compare
      if(totalDiff < minDiff) {
        friendIndex = i;
        minDiff = totalDiff;
      }
    }

    // add user the friend array
    friends.push(user);

    // send the match
    res.json(friends[friendIndex]);
  });
};