const express = require('express');
const router = express.Router();
const User = require('../db/user');
const Article = require('../db/article');

router.get('/:id', (req, res) => {
  if (!Nan(req.params.id)) {
    User.getOne(req.params.id).then(
      (user) => {
        if (user) {
          delete user.password;
          res.json(user);
        } else {
          resError(res, 500, "Invalid ID");
        }
      });
  } else {
    resError(res, 500, "Invalid ID");
  }
});

router.get('/:id/article', (req, res) => {
  if (!Nan(req.params.id)) {
    Article.getByUserID(req.params.id).then(
      (articles) => {
        res.json(articles);
      });
  } else {
    resError(res, 500, "Invalid ID");
  }
});

function resError(res, statCode, message) {
  res.status(statCode);
  res.json({message});
}

module.exports = router;
