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

sequelize
  .authenticate()
  .then(() => {
    console.log('Соединение установлено.');
  })
  .catch(err => {
    console.error('Ошибка соединения:', err);
  });

const Categories = sequelize.define('categories', {
  name: {
    type: Sequelize.STRING
  },

  pending: {
    type: Sequelize.INTEGER
  }

});

// Categories.sync({force: true}).then(() => {
//   return Categories.create({});
// });

module.exports = Categories;