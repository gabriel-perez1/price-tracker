const router = require('express').Router();

router.get('/signup', (req, res) => {
    res.render('signup', {
      title: "Sign Up"
    });
});

module.exports = router;