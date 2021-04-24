const Bcrypt = require("bcryptjs");
const router = require('express').Router();
let User = require('../models/user.model');

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
        .catch(next);
};
const getUser = async (req, res, next) => { // Login
    try {
    const user = await User.findOne({ username : req.body.username }).exec(); // f.ex. mongoose find username
    if(!user) {
        return res.status(400).json('The username does not exist!');
    }
    if(!Bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(400).json('The password is invalid!');
    }
        return res.json('Login!')
    } catch (error) {
        res.status(500).send(error);
    }
}

const checkPass = async (req, res, next) => { // Check Pass
    try {
    if(!Bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(400).json('The password is invalid!');
    }
        return res.json('ok!')
    } catch (error) {
        res.status(500).send(error);
    }
}

router.route('/').post (asyncMiddleware(getUser));
router.route('/check/:id').post((req,res) => {
    User.findById(req.params.id)
     .then(checkPass)

});
module.exports = router;