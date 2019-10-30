const bcrypt = require('bcryptjs');
const { Restaurant } = require('./restaurant-model');
const { User } = require('../user/user-model');

const salt = bcrypt.genSaltSync(8);

async function index(req, res) {
  const restaurants = await Restaurant.findAll();
  res.status(200).json({ data: restaurants });
}

async function create(req, res) {
  const restaurant = await Restaurant.create(req.body);
  // despois de criar o restaurante tem que crair um usuário também para ele
  const passwordHash = bcrypt.hashSync('123456', salt);
  const user = new User({
    name: 'Admin',
    email: restaurant.email,
    password: passwordHash,
    tipo_de_usuario: 'MANAGER',
    restaurant_id: restaurant.id,
  });
  user.save();
  res.status(202).json({ data: restaurant });
}

async function show(req, res) {
  const restaurant = await Restaurant.findOne({ where: { id: req.params.id } });
  if (!restaurant) {
    res.status(404).json({ msg: 'Restaurant not found' });
  }

  res.status(200).json({ data: [restaurant] });
}

async function update(req, res) {
  const response = await Restaurant.update(req.body, { where: { id: req.params.id } });
  res.status(200).json(response);
}

async function destroy(req, res) {
  const response = await Restaurant.destroy({ where: { id: req.params.id } });
  res.status(200).json({ data: response });
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
