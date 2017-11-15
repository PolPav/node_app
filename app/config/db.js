const Sequelize = require("sequelize");
const config = require("./config");

const db = new Sequelize(config.module.database, config.module.username, config.module.password, {
  host: config.module.host,
  dialect: config.module.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

exports.module = db;
