const router = require('express').Router();

router.get('/product-info', (req, res) => {
    res.render('product-info', {
      title: "Product Info"
    });
});

module.exports = router;