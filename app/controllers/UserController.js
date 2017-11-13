const User = require(`../models/Users`);

class UserController{

  getUsers() {

    const promise = new Promise((resolve, reject) => {
      resolve(User.findAll({ where: { trash: 0 } }));
      reject(new Error("Not Found"));

    });

    return promise;
  }

  getUserById(id){

    const promise = new Promise((resolve, reject) => {
      resolve(User.findById(id));
      reject(new Error("Not Found"));

    });

    return promise;
  }

  addUser(user){

    const promise = new Promise((resolve, reject) => {
      resolve(User.create(user));
      reject(new Error("Not Added"));

    });

    return promise;
  }

  updateUser(user, id){

    const promise = new Promise((resolve, reject) => {
      resolve(User.update(user, { where: { id: id } }));
      reject(new Error("Not Updated"));

    });

    return promise;
  }

  deleteUser(id){

    const promise = new Promise((resolve, reject) => {
      resolve(User.update({trash: 1}, { where: { id: id } }));
      reject(new Error("Not Deleted"));

    });

    return promise;
  }
}

module.exports = UserController;