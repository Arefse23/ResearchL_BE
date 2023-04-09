var createError = require('http-errors');
var express = require('express');
var path = require('path');
require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.PORT;

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var researchRouter = require('./routes/research');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

let session = require('express-session');
let passport = require('./helper/ppConfig');

app.use(session({
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {maxAge: 36000000}
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/', researchRouter);

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


app.listen(port, () => {
  console.log(`RL is running on ${port}`);
})


mongoose.set('strictQuery', false);
mongoose.connect(process.env.mongoDBURL, 
  {useNewUrlParser: true, useUnifiedTopology: true},
  () => {
      console.log("MongoDB Connected Successfully")
  }
)

module.exports = app;
