const { Router } = require('express');

const route = new Router();

const userController = require('./app/user/user-controller');
const authController = require('./app/auth/auth-controller');
const restaurantController = require('./app/restaurant/restaurant-controller');

route.get('/health', (req, res) => {
  res.json({ msg: 'Server up' });
});

route.post('/login', authController.login);

route.get('/users', userController.index);
route.get('/restaurants', restaurantController.index);

route.get('/restaurants/:id', restaurantController.show);

route.post('/users', userController.create);
route.post('/restaurants', restaurantController.create);

route.put('/restaurants/:id', restaurantController.update);

route.delete('/restaurants/:id', restaurantController.destroy);

module.exports = route;
