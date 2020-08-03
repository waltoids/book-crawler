const db = require("../models");

module.exports = function(app) {
    app.get('/', function(req, res) {
     
      db.User.findAll().then(function(dbUser) {
        // res.json(dbUser);
        console.log(dbUser);
        res.sendStatus(200);
      })
      .catch(err => console.log(err))
    });
}