const Sequelize = require("sequelize");
const db = require("../config/db.js");


const RatingSettings = db.module.define('rating_settings', {

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

module.exports = RatingSettings;