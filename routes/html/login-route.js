const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login', {
      title: "Log in"
    });
});

module.exports = router;