'use strict';
module.exports = (sequelize, DataTypes) => {
  var daily_stats = sequelize.define('daily_stats', {
    userId: DataTypes.BIGINT,
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
  return daily_stats;
};
