const express = require("express");
const routes = express.Router();

// const orm = require("");

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

  routes.get("/", function(req, res) {
    orm.selectAll(function (err, books) {
      if (err) {
        return res.status(501).json({
          message: "Database not found!"
      })
    }
    console.log('Books:', books,)
    res.render("index", {books, style:'index'})
    });
  });
  
module.exports = routes