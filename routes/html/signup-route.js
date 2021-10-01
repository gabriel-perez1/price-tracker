const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('signup', {
      title: "Sign Up"
    });
});

module.exports = router;