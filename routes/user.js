const db = require("../models");

module.exports = function(app) {
    app.get('/', function(req, res) {

    //  res.send('hello world')
      db.Users.findAll().then(function(dbUser) {
        // res.json(dbUser);
        console.log(dbUser);
        res.json(dbUser);
      })
      .catch(err => console.log(err))
    });
    // add user and password
    app.get('/add', function(req, res) {
      const data = {
        name:'walter',
        password: '2020'
      }

      let = { name, password } = data;

      //insert into table
      db.Users.create({
        name,
        password
      })
      
      .then(users => res.redirect('/'))
      .catch(err => console.log(err))
    });
}