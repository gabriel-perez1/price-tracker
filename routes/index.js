const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./html/home-routes');
const searchRoutes = require('./html/price-notification')
const loginRoutes = require('./html/login-route');
const signupRoutes =require('./html/signup-route');
const productRoute = require('./html/product-info')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', searchRoutes);
router.use('/', loginRoutes);
router.use('/', signupRoutes);
router.use('/', productRoute);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;