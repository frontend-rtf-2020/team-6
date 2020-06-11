var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

var authRouter = require('./routes/authRouter');
var regRouter = require('./routes/regRouter');

var app = express();

mongoose.connect('mongodb+srv://warden:frhnr@cluster0-vpewq.azure.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ 
    url: 'mongodb+srv://warden:frhnr@cluster0-vpewq.azure.mongodb.net/test?retryWrites=true&w=majority',
    ttl: 60 * 60
  })
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../front/build')));

app.use('/auth', authRouter);
app.use('/reg', regRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
