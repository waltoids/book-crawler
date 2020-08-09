const db = require("../models");

// add request to route
const request = require("request");

module.exports = function (app) {
  //Login page
  app.get("/", function (req, res) {
    res.render("index", {
      title: "Login Page",
      style: "main",
    });
  });

  //Register page
  app.get("/register", function (req, res) {
    res.render("register", {
      title: "Registration Page",
      style: "main",
    });
  });

  //Handle registering of users
  app.post("/register", function (req, res) {
    const { name, password, password2 } = req.body;
    let errors = [];

    //Check required fields
    if (!name || !password || !password2) {
      errors.push({ msg: "Please fill in all fields" });
    }

    if (password !== password2) {
      errors.push({ msg: "Passwords do not match" });
    }

    //Check password length
    if (password.length < 6) {
      errors.push({ msg: "Password should be at least 6 characters" });
    }

    if (errors.length > 0) {
      res.render("register", {
        title: "Registration Page",
        style: "main",
        errors,
        name,
      });
      console.log(errors);
    } else {
      //Validation passed
      db.Users.findOne({
        where: {
          name: name,
        },
      }).then(function (user) {
        if (user) {
          //User exists
          errors.push({ msg: "User is already registered" });
          res.render("register", {
            title: "Registration Page",
            style: "main",
            errors,
            name,
          });
          console.log(errors);
        } else {
          db.Users.create({
            name,
            password,
          });
          res.redirect("/");
        }
      });
    }
  });

  //Login handler
  app.post("/", function (req, res) {
    const { name, password } = req.body;
    let errors = [];
    //finds user based on name and password
    db.Users.findOne({
      where: {
        name: name,
        password: password,
      },
    }).then(function (user) {
      if (user) {
        //user and password matches
        res.render("search", {
          title: "Book Search Page",
          style: "books",
        });
      } else {
        errors.push({ msg: "Incorrect Login!" });
        res.render("index", {
          title: "Login Page",
          style: "main",
          errors,
        });
      }
    });
  });

  // get book search page using ajax call 
  app.get("/books/:bookSearch", function (req, res) {
    // use to store search parameter 
    const bookSearch = req.params.bookSearch;

    const apiKey = "AIzaSyAf-0XFdRGP0OkXktMErBjkhJQKS8evcqE";
    const queryUrl = "https://www.googleapis.com/books/v1/volumes?q="+bookSearch +"&key=" +apiKey;

    // capture and store data in json format
    request(queryUrl, { json: true }, (error, response, body) => {
      if (error) {
        return console.log(error);
      }
      // console.log(body[0].volumeInfo);

      console.log(Object.keys(body));

      console.log(Array.isArray(body.items))

      console.log("item array:", body.items[0]);

      // render on data on search page
      res.render("search", {
        books: body.items,
        title: "search",
        style: "books",
      }
      );
    });
  });
};

