const UserController = require(`./app/controllers/UserController`);
const CategoryController = require(`./app/controllers/CategoryController`);
const user = new UserController();
const category = new CategoryController();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.listen(8080);

app.get('/', function(req, res) {

  res.send("Hello Guest");
});

app.get('/users', function(req, res) {

  user.getUsers(res);
});

app.get('/users/:id', function(req, res) {

  user.getUserById(req, res);
});

app.post('/users', urlencodedParser, function(req, res) {

  user.addUser(req, res);
});

app.put('/users/:id', urlencodedParser, function(req, res) {

  user.updateUser(req, res);
});

app.delete('/users/:id', function(req, res) {

  user.deleteUser(req, res);
});

app.get('/categories', function (req, res) {

  category.getCategories(res);
});

app.get('/categories/:id', function(req, res) {

  category.getCategoryById(req, res);
});

app.post('/categories', urlencodedParser, function(req, res) {

  category.addCategory(req, res);
});

app.put('/categories/:id', urlencodedParser, function(req, res) {

  category.updateCategory(req, res);
});

app.delete('/categories/:id', function(req, res) {

  category.deleteCategory(req, res);
});
