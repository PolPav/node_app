'use strict';
module.exports = (sequelize, DataTypes) => {
  var rating_settings = sequelize.define('rating_settings', {
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
  return rating_settings;
};