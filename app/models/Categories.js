const Sequelize = require("sequelize");
const sequelize = new Sequelize('node_app', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const Categories = sequelize.define('categories', {
  name: {
    type: Sequelize.STRING
  },

  pending: {
    type: Sequelize.INTEGER
  }

});

module.exports = Categories;