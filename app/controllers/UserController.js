const appDb = require(`../models/AppDB`);
const User = require(`../models/Users`);

class UserController{

  constructor(){

    this.db = new appDb();
    this.user = {};
  }

  getUser(fn){

    User.findAll().then(users => {
      return fn(users)});

  }

  createUser(user, fn){

    this.db.create(user, (result) => { return fn(result) });

    return fn(this.user);
  }

  updateUser(user, id, fn){

    this.db.update(user, id, (result) => { return fn(result) });

    return fn(this.user);
  }

  deleteUser(id, fn){

    this.db.remove(id, (result) => { return fn(result) });
  }
}

module.exports = UserController;