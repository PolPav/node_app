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

const HourlyStats = sequelize.define('hourly_stats', {
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
});

// HourlyStats.sync({force: true}).then(() => {
//   return HourlyStats.create({});
// });

module.exports = HourlyStats;