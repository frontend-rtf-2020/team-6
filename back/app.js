var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')
var io = require("socket.io");

var authRouter = require('./routes/authRouter');
var regRouter = require('./routes/regRouter');
var exitRouter = require('./routes/exitRouter');
var sendRouter = require('./routes/sendRouter');
var searchRouter = require('./routes/searchRouter');

var app = express();

mongoose.connect('mongodb+srv://warden:frhnr@cluster0-vpewq.azure.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// session
app.use(session({
  secret: 'secret',
  resave: false, 
  unset: 'destroy',
  saveUninitialized: false,
  store: new MongoStore({ 
    url: 'mongodb+srv://warden:frhnr@cluster0-vpewq.azure.mongodb.net/test?retryWrites=true&w=majority',
    ttl: 30 * 60
  })
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../front/build')));

app.use('/auth', authRouter);
app.use('/reg', regRouter);
app.use('/exit', exitRouter);
app.use('/chat', sendRouter);
app.use('/search', searchRouter);

var {mailOptions} = require('./Workers/Registration')
app.get('/verify',function(req,res){
  console.log(req.protocol+":/"+req.get('host'));
  /*if((req.protocol+"://"+req.get('host'))==("http://"+host))
  {
      console.log("Domain is matched. Information is from Authentic email");
      if(req.query.id==rand)
      {*/
          var user = User.findOne( {password: req.query.id});
          user.active = true;
          user.save();
          console.log("email is verified");
          res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
      /*}
      else
      {
          console.log("email is not verified");
          res.end("<h1>Bad Request</h1>");
      }
  }
  else
  {
      res.end("<h1>Request is from unknown source");
  }*/
  });

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

module.exports = app, session;
