const express = require("express");
const routes = express.Router();

// create route for index file 
routes.get('/', (req, res) => {
    res.render('index', {
      title: 'Login Page',
      style: 'main'
    });
  });
  
  // create route for registration file
  routes.get('/register', (req, res) => {
    res.render('register', {
      title: 'Registration Page',
      style: 'main'
    });
  });
  
  // create route for search file 
  routes.get('/search', (req, res) => {
    res.render('search', {
      title: 'Book Search Page',
      style: 'book'
    });
  });

module.exports = routes