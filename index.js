
const UserController = require(`${__dirname}/app/controllers/UserController`);
const user = new UserController();
const express = require('express');
const app = express();
app.listen(8080);


app.get('/', function(req, res) {

  res.send("Hello Guest");

});

app.get('/users', function(req, res) {

  user.getUsers(users => {
  res.send(JSON.stringify(users))});

});

app.get('/users/:id', function(req, res) {

  const id = req.params.id;

  if(id){

    user.getUserById(id, user => {
    res.send(JSON.stringify(user))});
  }
});

app.post('/users', function(req, res) {

  const name = req.body.name;
  const surname = req.body.surname;
  const pending = req.body.pending;
  const category = req.body.category_id;

  const data =

    {
      name: name,
      surname: surname,
      pending: pending,
      category_id: category
    };

  user.addUser(data, result => {
    res.send(JSON.stringify(result))});

});

app.put('/users/:id', function(req, res) {

  const name = req.body.name;
  const surname = req.body.surname;
  const pending = req.body.pending;
  const category = req.body.category_id;
  const id = req.params.id;

  const data =
    {
      name: name,
      surname: surname,
      pending: pending,
      category_id: category
    };

  user.updateUser(data, id, result => {
    res.send(JSON.stringify(result))});

});

app.delete('/users/:id', function(req, res) {

  const id = req.params.id;

  user.deleteUser(id, result => {
    res.send(JSON.stringify(result))});

});


