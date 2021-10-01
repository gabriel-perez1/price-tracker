const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('price-notification');
});

module.exports = router;