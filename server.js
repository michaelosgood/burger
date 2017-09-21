
// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var exphbs = require("express-handlebars");
var port = 3200;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Boomers11!",
  database: "burgers_db" });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

// Root get route.
app.get("/", function(req, res) {

  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      throw err;
    }

    // Test it.
    // console.log('The solution is: ', data);

    // Test it.
    // res.send(data);

    res.render("index", { burgers: data });
  });
});

// Post route -> back to home
app.post("/", function(req, res) {

  // Test it.
  // console.log('You sent, ' + req.body.burger_name);

  // Test it.
  // res.send('You sent, ' + req.body.burger_name;

  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });

});

app.listen(port);
console.log("App listening on port: " + port);
