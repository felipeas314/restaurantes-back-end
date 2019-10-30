const sequelize = require('sequelize');
const database = require('../database/postgresql');
const { Restaurant } = require('../restaurant/restaurant-model');

const Product = database.define(
  'product',
  {
    name: { type: sequelize.STRING },
    description: { type: sequelize.STRING },
    price: { type: sequelize.DECIMAL(10, 2) },
  },
  { tableName: 'products' },
);

Product.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id',
});

exports.Product = Product;
