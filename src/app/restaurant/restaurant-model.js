const mongoose = require('mongoose');

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const restaurant = mongoose.model('restaurant', restaurantSchema);

exports.restaurant = restaurant;
