'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('monthlyStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
    return queryInterface.dropTable('monthly_stats');
  }
};
