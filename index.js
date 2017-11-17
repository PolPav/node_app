const UserController = require(`./app/controllers/UserController`);
const CategoryController = require(`./app/controllers/CategoryController`);
const AuthController = require(`./app/controllers/AuthController`);
const Auth = require('./app/models/Auth');
const user = new UserController();
const category = new CategoryController();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const env = require('dotenv').load();
const exphbs = require('express-handlebars');
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('views', './app/views');
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret: "SECRET"}));
app.use(passport.initialize());
app.use(passport.session());

console.log('before passport require');

require('./app/routes/auth.js')(app, passport);
require('./app/config/passport/passport.js')(passport, Auth);

app.listen(5558);

app.get('/', function(req, res) {

  res.send("Hello Guest");
});

app.get('/login', function(req, res) {

  res.status(200);
  res.send('Enter login and password');
});

app.post('/login', urlencodedParser, function(req, res) {

  AuthController.addAccount(req, res);
});

app.get('/users', function(req, res) {

  AuthController.checkAccount(req, res);
});

app.get('/users/:token', function(req, res) {

  AuthController.checkAccount(req, res);
});

app.get('/users/:id/:token', function(req, res) {

  AuthController.checkAccount(req, res);
  // user.getUserById(req.params.id, res);
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
