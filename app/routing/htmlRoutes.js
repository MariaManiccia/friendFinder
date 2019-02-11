// ===============================================================================

// Include the path package to get the correct file path for our html
var path = require("path");


module.exports = function (app) {

    // Making an html GET request, directing it to the right html page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Setting the default to the home page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};