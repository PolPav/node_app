const Sequelize = require("sequelize");
const db = require("../config/db.js");

const HourlyStats = db.module.define('hourlyStats', {

  userId: {
    type: Sequelize.BIGINT
  },

  totalLikes: {
    type: Sequelize.INTEGER
  },

  totalComments: {
    type: Sequelize.INTEGER
  },

  totalFollowers: {
    type: Sequelize.INTEGER
  },

  lastLikes: {
    type: Sequelize.INTEGER
  },

  trash: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

});

module.exports = HourlyStats;
