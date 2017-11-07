const mysql = require('mysql');

class AppDB{

  constructor(){

    this.name = '';
    this.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root'
    });

    this.connection.connect();

  }

  getUsers(fn){

    this.connection.query('SELECT * FROM node_app.users', (err, rows, fields) => {
      if (err){
        throw err;
      }

      return fn(rows[0].name);

    });

  }
}

module.exports = AppDB;