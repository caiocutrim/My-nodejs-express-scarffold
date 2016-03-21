'use strict';

const express = require('express');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const engine = require('ejs-mate');
const load = require('express-load');

module.exports = Setup;

function Setup() {


  let app = express();

  // view engine setup
  app.engine('ejs', engine);
  app.set('views', `server/views`);
  app.set('view engine', 'ejs');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static('public'));

  load('models', {'cwd':'server'})
   .then('services')
   .then('controllers')
   .then('events')
   .then('routes')
   .into(app);


  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });


  return app;
}
