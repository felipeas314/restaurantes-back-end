const { Router } = require('express');

const route = new Router();

const userController = require('./app/user/user-controller');

route.get('/health', (req, res) => {
  res.json({ msg: 'Server up' });
});

route.get('/users', userController.index);

route.post('/users', userController.create);

module.exports = route;
