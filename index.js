
const appDb = require(`${__dirname}/app/models/AppDB`);
const express = require('express');
const app = express();
app.listen(8080);


app.get('/', function(req, res) {

  const db = new appDb;
 db.getUsers((userName) => res.send(`hello ${userName}`));

});

