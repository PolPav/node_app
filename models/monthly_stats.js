'use strict';
module.exports = (sequelize, DataTypes) => {
  var monthly_stats = sequelize.define('monthly_stats', {
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
  return monthly_stats;
};