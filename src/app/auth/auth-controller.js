const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../user/user-model');

async function login(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
    res.status(401).json({ msg: 'Usuário não existe' });
    return;
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    res.status(401).json({ msg: 'Senha incorreta' });
    return;
  }

  const token = jwt.sign({ user_id: user.id, restaurant_id: user.restaurant_id }, 'segredo', {
    expiresIn: '7d',
  });

  console.log(token);

  res.status(200).json({ token: token, user: user.name,role:user.tipo_de_usuario });
}

module.exports = {
  login,
};
