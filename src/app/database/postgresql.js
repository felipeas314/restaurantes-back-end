const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(
  config.get('postgresql_database'),
  config.get('postgresql_user'),
  config.get('postgresql_password'),
  {
    host: config.get('postgresql_host'),
    dialect: 'postgres',
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync();

module.exports = sequelize;
