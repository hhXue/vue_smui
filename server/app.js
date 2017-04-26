var express = require('express');
//var exphbs = require('express-handlebars');
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var Config    = require('../server_config');
var router = require('./rout');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

//配置cors 允许访问的域
//app.use(cors({
//  origin:['http://localhost:8000'],
//  methods:['get','post'],
//  allowHeaders:['Conten-Type','Authorization']
//}))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
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


module.exports = app;
