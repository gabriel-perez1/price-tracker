const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./html/home-routes');
const searchRoutes = require('./html/price-notification')
const loginRoutes = require('./html/login-route');
const signupRoutes =require('./html/signup-route');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', searchRoutes);
router.use('/', loginRoutes);
router.use('/', signupRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;