// required modules
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// express function
const app = express();

// middlewares
// express handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// public folder
app.use(express.static(path.join(__dirname, 'public')));

// index route
app.get('/', function (req, res) {
  res.render('index');
})

// about route
app.get('/about', function (req, res) {
  res.render('about');
})

// login route
app.get('/users/login', function (req, res) {
  res.render('users/login');
})

// register route
app.get('/users/register', function (req, res) {
  res.render('users/register');
})


// port for server
const port = 8700;

// listen method for the server
app.listen(port, function () {
  console.log(`Server running at port ${port}`);
});