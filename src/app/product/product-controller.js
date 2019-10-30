const { Product } = require('./product-model');

async function index(req, res) {
  const products = await Product.findAll({ where: { restaurant_id: req.restaurant_id } });
  res.status(200).json({ data: products });
}

async function create(req, res) {
  const product = await Product.create({ ...req.body, restaurant_id: req.restaurant_id });

  res.status(202).json({ data: product });
}

async function show(req, res) {
  const product = await Product.findOne({ where: { id: req.params.id } });
  if (!product) {
    res.status(404).json({ msg: 'Product not found' });
  }

  res.status(200).json({ data: [product] });
}

async function update(req, res) {
  const response = await Product.update(req.body, { where: { id: req.params.id } });
  res.status(200).json(response);
}

async function destroy(req, res) {
  const response = await Product.destroy({ where: { id: req.params.id } });
  res.status(200).json({ data: response });
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
