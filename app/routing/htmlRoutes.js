
// Include the path package to get the correct file path for our html
var path = require("path");


module.exports = function (app) {

    // Making an html GET request, directing it to the right html page
    app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// default route for homepage
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};