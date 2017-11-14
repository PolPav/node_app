const UserController = require(`${__dirname}/app/controllers/UserController`);
const CategoryController = require(`${__dirname}/app/controllers/CategoryController`);
const user = new UserController();
const category = new CategoryController();
const express = require('express');
const app = express();
app.listen(8080);

app.get('/', function(req, res) {

  res.send("Hello Guest");

});

app.get('/users', function(req, res) {

  user.getUsers().then(users => {

    res.send({ok: true, data: users});

  }).catch(err => res.send({ok: false, error: err}));
});

app.get('/users/:id', function(req, res) {

  const id = req.params.id;

  if(id){

    user.getUserById(id).then(result => {

      if(result.length !== 0){
        res.send({ok: true, data: result});

      } else {
        res.send({ok: false, error: "deleted"});
      }

    }).catch(err => res.send({ok: false, error: err}));
  }
});

app.post('/users', function(req, res) {

  const data =

    {
      name: req.body.name,
      surname: req.body.surname,
      pending: req.body.pending,
      category_id: req.body.category_id
    };

  user.addUser(data).then(result => {

    res.send(({ok: true, data: result}))

  }).catch(err => res.send({ok: false, error: err}));
});

app.put('/users/:id', function(req, res) {

  const id = req.body.id;

  const data =
    {
      name: req.body.name,
      surname: req.body.surname,
      pending: req.body.pending,
      category_id: req.body.category_id
    };

  user.updateUser(data, id).then(result => {

    res.send({ok: true, data: result});

  }).catch(err => res.send({ok: false, error: err}));
});

app.delete('/users/:id', function(req, res) {

  const id = req.params.id;

  user.deleteUser(id).then(result => {

    res.send(({ok: true, data: result}));

  }).catch(err => res.send({ok: false, error: err}));
});

app.get('/categories', function (req, res) {

  category.getCategories().then(users => {

    res.send({ok: true, data: users});

  }).catch(err => res.send({ok: false, error: err}));
});

app.get('/categories/:id', function(req, res) {

  const id = req.params.id;

  if(id){

    category.getCategoryById(id).then(result => {

      if(result.length !== 0){
        res.send({ok: true, data: result});

      } else {
        res.send({ok: false, error: "deleted"});
      }

    }).catch(err => res.send({ok: false, error: err}));
  }
});

app.post('/categories', function(req, res) {

  const data =
    {
      name: req.body.name,
      surname: req.body.surname,
      pending: req.body.pending,
      category_id: req.body.category_id
    };

  category.addCategory(data).then(result => {

    res.send(({ok: true, data: result}))

  }).catch(err => res.send({ok: false, error: err}));
});

app.put('/categories/:id', function(req, res) {

  const id = req.body.id;

  const data =
    {
      name: req.body.name,
      surname: req.body.surname,
      pending: req.body.pending,
      category_id: req.body.category_id
    };

  category.updateCategory(data, id).then(result => {

    res.send({ok: true, data: result});

  }).catch(err => res.send({ok: false, error: err}));
});

app.delete('/categories/:id', function(req, res) {

  const id = req.params.id;

  category.deleteCategory(id).then(result => {

    res.send(({ok: true, data: result}));

  }).catch(err => res.send({ok: false, error: err}));
});
