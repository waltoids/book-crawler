const express = require("express");
const routes = express.Router();


routes.get('/', (req, res) => {
    res.render('index', {
      title: 'Login Page'
    });
  });
  
  routes.get('/register', (req, res) => {
    res.render('register', {
      title: 'Registration Page'
    });
  });
  
  routes.get('/search', (req, res) => {
    res.render('search', {
      title: 'Book Search Page'
    });
  });

module.exports = routes