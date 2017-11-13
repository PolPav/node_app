'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rating_settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rating_settings');
  }
};