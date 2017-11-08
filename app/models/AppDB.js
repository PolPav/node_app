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


  create(user, fn){

    this.connection.query('INSERT INTO node_app.users SET ?', user, (err, result) => {
      if (err){
        throw err;
      }

      return fn(result);

    });
  }

  read(fn){

    this.connection.query('SELECT * FROM node_app.users WHERE trash = 0', (err, result) => {
      if (err){
        throw err;
      }

      return fn(result);

    });
  }

  update(user, id, fn){

    this.connection.query(`UPDATE node_app.users SET ? WHERE id = ${id}`, user, (err, result) => {
      if (err){
        throw err;
      }

      return fn(result);

    });
  }

  remove(id, fn){

    this.connection.query(`UPDATE node_app.users SET ? WHERE id = ${id}`, {trash: 1}, (err, result) => {
      if (err){
        throw err;
      }

      return fn(result);

    });
  }

}



module.exports = AppDB;