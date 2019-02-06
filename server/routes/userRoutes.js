const express = require('express');
const router = express.Router();
const User = require('../../models/usersScherma');

//user signup route
router.post('/signup', (req, res, next) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    user.save()
    .then(result => {
        res.status(201).json({
            message: 'User created!'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});