//Check Input Data is correct!

const {
    check
} = require('express-validator');
exports.validSign = [
    check('username', 'Username is required').notEmpty()
    .isLength({
        min: 4,
        max: 32
    }).withMessage('Username must be between 4 to 32 characters'),
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'Password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]

exports.validLogin = [
    check('username', 'Username is required').notEmpty(),
    check('password', 'Password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]


exports.forgotPasswordValidator = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Must be a valid email address')
];

exports.resetPasswordValidator = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ 
            min: 6 })
        .withMessage('Password must be at least  6 characters long')
];