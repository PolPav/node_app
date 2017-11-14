const User = require(`../models/Users`);
const DailyStats = require(`../models/DailyStats`);
const HourlyStats = require(`../models/HourlyStats`);
const MonthlyStats = require(`../models/MonthlyStats`);

class UserController{

  getUsers() {

    return  User.findAll(
        {
          where: { trash: 0 },
          include:[{model: DailyStats}, {model: HourlyStats}, {model: MonthlyStats}]
        }
      );
    }

  getUserById(id){

    return User.findAll(
      {
        where: { id: id, trash: 0 },
        include:[{model: DailyStats}, {model: HourlyStats}, {model: MonthlyStats}]
      }
    );
  }

  addUser(user){

    return User.create(user);
  }

  updateUser(user, id){

    return User.update(user, { where: { id: id } });
  }

  deleteUser(id){

    return User.update({trash: 1}, { where: { id: id } });
  }
}

module.exports = UserController;
