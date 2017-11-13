const Sequelize = require("sequelize");
const db = require("../config/db.js");

const DailyStats = db.module.define('daily_stats', {
  user_id: {
    type: Sequelize.BIGINT
  },

  total_likes: {
    type: Sequelize.INTEGER
  },

  total_comments: {
    type: Sequelize.INTEGER
  },

  total_followers: {
    type: Sequelize.INTEGER
  },

  last_likes: {
    type: Sequelize.INTEGER
  },

  trash: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
});

module.exports = DailyStats;