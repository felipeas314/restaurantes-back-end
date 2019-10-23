const { Restaurant } = require('./restaurant-model');

async function index(req, res) {
  const restaurants = await Restaurant.findAll();
  res.status(200).json({ data: restaurants });
}

async function create(req, res) {
  const restaurant = await Restaurant.create(req.body);
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
