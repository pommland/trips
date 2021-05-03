const router = require('express').Router();
let User = require('../models/user.model');
const Bcrypt = require("bcryptjs");

//Load controllers
const {
  registerController,
  activationController,
  signinController,
  forgotPasswordController,
  resetPasswordController
} = require('../controllers/auth_controller')

//Load valid
const {
  validSign,
  validLogin,
  forgotPasswordValidator,
  resetPasswordValidator
} = require('../helpers/valid')





router.route('/').get((req, res) => { // Get All User
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post( // register User
  validSign,registerController);

router.post('/activation', activationController) // activate user

router.route('/login').post( // Add User
  validLogin,signinController);

router.route('/forget').post( // Forget password send to email
  forgotPasswordValidator,forgotPasswordController);

router.route('/reset').post( // reset by token(resetlink) -> find db - > edit
  resetPasswordValidator,resetPasswordController);

router.route('/:id').get((req, res) => { // get user by id
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => { // delete user by id
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => { // Update & edit User
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.password = Bcrypt.hashSync(req.body.password);
      user.email = req.body.email;
      user.address = req.body.address;
      user.Tel = req.body.Tel;
      user.save()
        .then(res => {
          res.password = undefined;
          res.address = undefined;
          res.Tel = undefined;
          res.json(res)})
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;