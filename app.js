var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var cors = require('cors');
var stylus = require('stylus');
// var mongoose = require('mongoose');
require('babel-register');
require('./mongo/mongodb');

const route = require('./routes/index');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


// mongo
const mongodb = require('./mongo/mongodb');
mongodb.connect();

// app.use('/api', indexRouter);
// app.use('/users', usersRouter);
// app.use('/api', api);

// 自定义跨域中间件
var allowCors = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, access-control-allow-headers');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
};
app.use(allowCors);//使用跨域中间件
route(app)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// swig.setDefaults({ cache: false });
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
