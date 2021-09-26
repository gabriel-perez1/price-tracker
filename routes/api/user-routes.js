const router = require('express').Router();
const {User} = require('../../models');


// Retrieve all users
router.get('/', (req, res) => {
    // MySQL equivalent to -> SELECT * FROM users;
    User.findAll({attributes: { exclude: ['password']}})
        .then (data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Retrieve a single user.
router.get ('/:id', (req, res) => {
    User.findOne({
        attributes: {exclude: ['password']},
        where: {id: req.params.id}
    })
    .then (data => {
        if (!data){
            res.status(404).json({message: 'No user found with this id'});
            return;
        }
        res.json(data);
    })
    .catch (err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post ('/', (req, res) => {
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    })
    .then (data => res.json(data))
    .catch (err =>  {
        console.log(err);
        res.status(500).json(err);
    });
});