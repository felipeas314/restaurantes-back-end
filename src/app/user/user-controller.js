const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(8);

const { User } = require('./user-model');

async function index(req, res) {
  const users = await User.findAll();

  res.status(200).json({ data: users });
}

async function create(req, res) {
  const passwordHash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = passwordHash;
  const user = await User.create(req.body);
  res.status(202).json({ data: user });
}

module.exports = {
  index,
  create,
};
