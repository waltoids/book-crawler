var path = require("path");

// Routes
module.exports = function(app) {

  // index route loads login.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../routes/login"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../routes/login"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../routes/register"));
  });

  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../routes/search"));
  });

};