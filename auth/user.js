const express = require('express');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const router = express.Router();
const User = require('../db/user');
const Article = require('../db/article');

require('dotenv').config();

router.get('/', (req, res, next) => {
  res.json({
    message: '🔐'
  });
});

router.post('/signup', (req, res, next) => {
  if (validUser(req.body)) {
    User.getOneByEmail(req.body.email)
      .then((user) => {
        console.log('user: ', user);

        if (!user) {
          bcrypt.genSalt(8, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
              const user = {
                name: req.body.name,
                email: req.body.email,
                password: hash,
                created_at: new Date()
              };

              User.create(user)
                .then((id) => {

                  JWT.sign({
                    id
                  }, process.env.TOKEN_SECRET, { expiresIn: '1h' }, (err, token) => {
                    console.log('err: ', err);
                    console.log('token: ', token);
                    res.json({
                      id,
                      token,
                      message: 'User has been created 🍜'
                    });
                  });
                });
            });
          });
        } else {
          // email is in user
          next(new Error('Email is in use'));
        }
      });
  } else {
    next(new Error('Invalid User Entry'));
  }
});

router.post('/login', (req, res, next) => {
  if (validUser(req.body)) {
    User.getOneByEmail(req.body.email)
      .then((user) => {
        console.log(user);
        if (user) {
          let id = user.id;

          bcrypt.compare(req.body.password, user.password)
            .then((result) => {
              if (result) {


                JWT.sign({
                  id
                }, process.env.TOKEN_SECRET, { expiresIn: '1h' }, (err, token) => {
                  console.log('err: ', err);
                  console.log('token: ', token);

                  res.json({
                      id,
                      token,
                      message: "Logged in 🗝"
                  });
                });

                // const isSecure = req.app.get('env') != 'development';

                // res.cookie('user_id', user.id, {
                //   httpOnly: true,
                //   secure: isSecure,
                //   signed: true
                // });



              } else {
                next(new Error('Invalid Login'));
              }
            });
        } else {
          next(new Error('Invalid Login'));
        }
      });
  } else {
    next(new Error('Invalid Login'));
  }
});


function validUser(user) {
  const emailRegEx = user.email.match(/@/);
  const validEmail = typeof user.email == 'string' &&
    user.email.trim() != '' && emailRegEx[0] == "@";
  const validPassword = typeof user.password == 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length > 5;
  return validEmail && validPassword;
}

// breachy routes

router.get('/:id', (req, res, next) => {
    User.getOne(req.params.id)
      .then(user => {
        console.log(user);
        res.json(user)
      })
})

router.get('/:id/articles', (req, res, next) => {
  if(!isNaN(req.params.id)) {
    Article.getByUserID(req.params.id).then(articles => {
      res.json(articles)
    });
  } else {
    next(new Error('invalid user id'));
  }

})

module.exports = router;
