const { promisify } = require('util');
const jwt = require('jsonwebtoken');

async function tokenVerify(req, res, next) {
  const token = req.headers.authorization;
  console.log('token',token);
  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, 'segredo');

    //req.userId = decoded.id;

    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: 'Token invalid' });
  }
}

module.exports = tokenVerify;