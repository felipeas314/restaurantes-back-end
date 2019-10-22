const sequelize = require('sequelize');
const database = require('../database/postgresql');

const User = database.define(
  'user',
  {
    name: { type: sequelize.STRING },
    email: { type: sequelize.STRING },
    password: { type: sequelize.STRING },
  },
  { tableName: 'users' },
);

exports.User = User;
