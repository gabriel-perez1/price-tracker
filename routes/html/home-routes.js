const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
      title: "Price Tracker"
    });
});

module.exports = router;