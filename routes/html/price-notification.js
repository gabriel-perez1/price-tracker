const router = require('express').Router();

router.get('/price-notification', (req, res) => {
    res.render('price-notification');
});

module.exports = router;