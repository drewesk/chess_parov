const express = require('express');
const router = express.Router();


const people = [{
    name: 'Bartholomew',
    message: 'Waaaaat'
  },
  {
    name: 'Sarah',
    message: 'Is this a news site I\'m posting on???'
  },
  {
    name: 'Cat-Person',
    message: '*meow*'
  }
];


router.get('/', (req, res, next) => {
  res.render('../views/index.hbs', {
    people: people
  });
});

module.exports = router;
