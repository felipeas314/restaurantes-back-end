const sequelize = require('sequelize');
const database = require('../database/postgresql');

const User = database.define(
  'user',
  {
    name: { type: sequelize.STRING },
    password: { type: sequelize.STRING },
  },
  { tableName: 'user' },
);

exports.User = User;
