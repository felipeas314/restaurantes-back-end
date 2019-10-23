const sequelize = require('sequelize');
const database = require('../database/postgresql');

const Restaurant = database.define(
  'restaurant',
  {
    name: { type: sequelize.STRING },
    cnpj: { type: sequelize.STRING },
    number: { type: sequelize.STRING },
    street: { type: sequelize.STRING },
    city: { type: sequelize.STRING },
    state: { type: sequelize.STRING },
  },
  { tableName: 'restaurants' },
);

exports.Restaurant = Restaurant;
