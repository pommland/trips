const expressJwt = require('express-jwt');
const _ = require('lodash');
const fetch = require('node-fetch');
let User = require('../models/user.model');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandling');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.MAIL_KEY);
const Bcrypt = require("bcryptjs");
// npm i express-jwt jwt loadash node-fetch express-validator jsonwebtoken @sendgrid/mail

// registor
exports.registerController = (req, res) => {
    //const { username, email, password , roles } = req.body;
    const username = req.body.username;
    const password = Bcrypt.hashSync(req.body.password);
    const email = req.body.email;
    const roles = Number(req.body.roles);
    //const address = "";
    //const Tel = "";
    
    
    /*
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));*/
    
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      const firstError = errors.array().map(error => error.msg)[0];
      return res.status(422).json({
        errors: firstError
      });
    } else {
      User.findOne({
        username
      }).exec((err, user) => {
        if (user) {
          return res.status(400).json({
            errors: 'Username is taken'
          });
        }
      });
      
      const token = jwt.sign(
        {
            username,
            password,
            email,
            roles
        },
        process.env.JWT_ACCOUNT_ACTIVATION,
        {
          expiresIn: '5m'
        }
      );
      const emailData = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Account activation link',
        html: `
                  <h1>Please use the following to activate your account</h1>
                  <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
                  <hr />
                  <p>This email may containe sensetive information</p>
                  <p>${process.env.CLIENT_URL}</p>
              `
      };
  
      sgMail
        .send(emailData)
        .then(() => {
          return res.json({
            message: `Email has been sent to ${email}`
          });
        })
        .catch(err => {
          return res.status(400).json({
            success: false,
            errors: errorHandler(err)
          });
        });
    }
  };

//active account
exports.activationController = (req, res) => {
    const { token } = req.body;
  
    if (token) {
      jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
        if (err) {
          console.log('Activation error');
          return res.status(401).json({
            errors: 'Expired link. Signup again'
          });
        } else {
          const { username,
            password,
            email,
            roles} = jwt.decode(token);
  
          console.log(email);
          const newUser = new User({
               username,
                password,
                email,
                roles
            });
  
          newUser.save((err, user) => {
            if (err) {
              console.log('Save error', errorHandler(err));
              return res.status(401).json({
                errors: errorHandler(err)
              });
            } else {
              return res.json({
                success: true,
                message: user,
                message: 'Signup success'
              });
            }
          });
        }
      });
    } else {
      return res.json({
        message: 'error happening please try again'
      });
    }
  };
  