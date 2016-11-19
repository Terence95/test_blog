/**
 * 通过require()加载express、http、path模块，以及routes文件夹下的index.js
 * 和user.js
**/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
// 设置views文件夹为存放视图文件的目录, 存放模板文件 __dirname为全局变量
// 储存当前正在执行脚本所在的目录名
app.set('views', path.join(__dirname, 'views'));
// app.set('port', process.env.PORT || 3000);
// 设置视图模板引擎为ejs
app.set('view engine', 'ejs');
// app.use(express.favicon());

// uncomment after placing your favicon in /public
// connect 内建的中间件，使用默认的favicon图标
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// connect 内建中间件，在开发环境下使用，在终端显示简单日志
app.use(logger('dev'));
// connect内建中间件，用来解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// connect内建的中间件，设置根目录下public文件夹为存放img, css, js等静态文件的目录
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// 下面这句可以删除
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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


// module.exports = function (app) {
//   app.get('/', function (req, res) {
//     res.redirect('/posts');
//   });
//   app.use('/signup', require('routes/signup'));
//   app.use('/signin', require('./signin'));
//   app.use('/signout', require('./signout'));
//   app.use('/posts', require('./posts'));
// };


// module.exports = app;
// routes(app);
module.exports = app;
