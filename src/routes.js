const { Router } = require('express');

const route = new Router();

const userController = require('./app/user/user-controller');
const authController = require('./app/auth/auth-controller');
const restaurantController = require('./app/restaurant/restaurant-controller');
const productController = require('./app/product/product-controller');

const tokenVerify = require('./app/middleware/token-verify');

route.get('/health', (req, res) => {
  res.json({ msg: 'Server up' });
});

route.post('/login', authController.login);
route.post('/users', userController.create);

route.use(tokenVerify);

route.get('/users', userController.index);
route.get('/restaurants', restaurantController.index);
route.get('/products', productController.index);

route.get('/restaurants/:id', restaurantController.show);
route.get('/products/:id', productController.show);

route.post('/restaurants', restaurantController.create);
route.post('/products', productController.create);

route.put('/restaurants/:id', restaurantController.update);
route.put('/products/:id', productController.update);

route.delete('/restaurants/:id', restaurantController.destroy);
route.delete('/products/:id', productController.destroy);

module.exports = route;
