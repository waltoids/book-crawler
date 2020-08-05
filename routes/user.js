const db = require("../models");

module.exports = function(app) {

  //Login page
  app.get('/login', function(req, res){
    res.render('login')
  });

  //Register page
  app.get('/register', function(req, res){
    res.render('register')
  });

  //Handle registering of users
  app.post('/register', function(req, res){
    const { name, password } = req.body
    let errors =[];

  //Check required fields
    if(!name || !password) {
      errors.push({ msg: 'Please fill in all fields' });
    }

  //Check password length
    if(password.length < 6){
      errors.push({ msg: 'Password should be at least 6 characters' });
    }
    
    if(errors.length > 0){
      res.render('register',{
        errors,
        name
      })
    }else {
      //Validation passed
      db.Users.findOne({ 
        where: {
          name:name
        }
       })
        .then(function(user){
          if(user) {
            //User exists
            errors.push({ msg: 'User is already registered' })
            res.render('register',{
              errors,
              name
            });
          } else {
            db.Users.create({
              name,
              password
            });
            res.redirect('/login');
          }
        });
    }
  });

  //Login handler
  app.post('/login', function(req, res){
    const { name, password } = req.body
    //finds user based on name and password
    db.Users.findOne({ 
      where: {
        name:name,
        password:password
      }
     })
     .then(function(user){
       if(user){
         //user and password matches
         res.render('dashboard')
       }else{
         res.render('login')
       }
     })

  })
}