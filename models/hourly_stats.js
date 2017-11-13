'use strict';
module.exports = (sequelize, DataTypes) => {
  var hourly_stats = sequelize.define('hourly_stats', {
    user_id: DataTypes.BIGINT,
    total_likes: DataTypes.INTEGER,
    total_comments: DataTypes.INTEGER,
    total_followers: DataTypes.INTEGER,
    last_likes: DataTypes.INTEGER,
    trash: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return hourly_stats;
};