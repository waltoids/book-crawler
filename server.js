const express = require("express");
const exphbs = require("express-handlebars");

// Import routes and give the server access to them.
// const routes = require('');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars middleware
app.engine("handlebars", exphbs({ 
  defaultLayout: "main"
 }));

app.set("view engine", "handlebars");

// app.use(routes);
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Login Page'
  });
});

app.get('/register', (req, res) => {
  res.render('register', {
    title: 'Registration Page'
  });
});

app.get('/search', (req, res) => {
  res.render('search', {
    title: 'Book Search Page'
  });
});


app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });