const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../user/user-model');

async function login(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
    res.status(400).json({ msg: 'Usuário não existe' });
    return;
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    res.status(400).json({ msg: 'Senha incorreta' });
    return;
  }

  const token = jwt.sign({ id: user.id }, 'asdf');

  res.status(200).json({ token });
}

module.exports = {
  login,
};
