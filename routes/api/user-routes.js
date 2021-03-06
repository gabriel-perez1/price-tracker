const router = require('express').Router();
const {
    User
} = require('../../models');


// Retrieve all users
router.get('/', (req, res) => {
    // MySQL equivalent to -> SELECT * FROM users;
    User.findAll()
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Retrieve a single user.
router.get('/:id', (req, res) => {
    User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: 'No user found with this id'
                });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({
                message: 'No user with that email address!'
            });
            return;
        }

        // Verify user
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect password!',
                state:false
            });
            return;
        }

        res.json({
            user: dbUserData,
            message: 'You are now logged in!',
            state:true
        });

    });
});

module.exports = router;