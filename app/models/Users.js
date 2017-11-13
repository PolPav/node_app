const Sequelize = require("sequelize");
const db = require("../config/db.js");

const User = db.module.define('user', {
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

