const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./html/home-routes');
const searchRoutes = require('./html/price-notification')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', searchRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;