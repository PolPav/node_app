const User = require(`../models/Users`);

class UserController{

  getUsers(callback) {

      User.findAll({ where: { trash: 0 } }).then(records => {
        return callback(records);
      });
  }

  getUserById(id, callback){

    User.findById(id).then(records => {
      return callback(records);
    });
  }

  addUser(user, callback){

    return callback(User.create(user));
  }

  updateUser(user, id, callback){

    return callback(User.update(user, { where: { id: id } }));
  }

  deleteUser(id, callback){

    return callback(User.update({trash: 1}, { where: { id: id } }));
  }

}

module.exports = UserController;