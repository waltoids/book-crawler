const db = require("../models");

module.exports = function(app) {

  //Login page
  app.get('/', function(req, res){
    res.render('index', {
      title: 'Login Page',
      style: 'main'
    })
  });

  //Register page
  app.get('/register', function(req, res){
    res.render('register', {
      title: 'Registration Page',
      style: 'main'
    });
  });

  //Handle registering of users
  app.post('/register', function(req, res){
    const { name, password, password2} = req.body
    let errors = [];
    

  //Check required fields
    if(!name || !password || !password2) {
      errors.push({ msg: 'Please fill in all fields' });
      
    }

    if(password !== password2) {
      errors.push({ msg: 'Passwords do not match' });
    }

  //Check password length
    if(password.length < 6){
      errors.push({ msg: 'Password should be at least 6 characters' });
    }
    
    if(errors.length > 0){
      res.render('register',{
        title: 'Registration Page',
        style: 'main',
        errors,
        name
      })
      console.log(errors)
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
              title: 'Registration Page',
            style: 'main',
              errors,
              name
            });
            console.log(errors)
          } else {
            db.Users.create({
              name,
              password
            });
            res.redirect('/');
          }
        });
    }
  });

  //Login handler
  app.post('/', function(req, res){
    const { name, password } = req.body
    let errors = [];
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
         res.render('search', {
          title: 'Book Search Page',
          style: 'books'
        })
       }else{
        errors.push({ msg: 'Incorrect Login!' });
        res.render('index', {
          title: 'Login Page',
          style: 'main',
          errors
        })
       }
     })

  })
}