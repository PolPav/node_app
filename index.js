
const UserController = require(`${__dirname}/app/controllers/UserController`);

const express = require('express');
const app = express();
app.listen(8080);



app.get('/', function(req, res) {
  const user = new UserController;
  user.getUser(users => {
    res.send(JSON.stringify(users))});

});


