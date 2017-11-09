const Sequelize = require("sequelize");
const sequelize = new Sequelize('node_app', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },

  surname: {
    type: Sequelize.STRING
  },

  pending: {
    type: Sequelize.INTEGER
  },

  category_id: {
    type: Sequelize.BIGINT
  },

  calculate_rating: {
    type: Sequelize.INTEGER
  },

  trash: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

});

module.exports = User;

