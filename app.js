const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv = require('dotenv').config();

const index = require('./static_routes/index');
const user = require('./auth/user');

const authMiddleware = require('./auth/middleware');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.jpg')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(authMiddleware.checkTokenSetUser);

app.use('/', index);
app.use('/user', user)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  res.render('../views/error.hbs', {

    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}

  });
});

module.exports = app;
