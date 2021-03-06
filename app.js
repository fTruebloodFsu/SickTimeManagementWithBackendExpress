var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getUserByNameRouter = require('./routes/getUserByName');
var enterNewRequestRouter = require('./routes/enterNewRequest');
var deleteEntryRouter = require('./routes/deleteEntry');
var checkBetweenRouter = require('./routes/getRequestsBetweenDates');
var checkByStoreRouter = require('./routes/getRequestByStore');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/getUserByName', getUserByNameRouter);
app.use('/enterNewRequest', enterNewRequestRouter);
app.use('/deleteEntry', deleteEntryRouter)
app.use('/getRequestsBetweenDates', checkBetweenRouter);
app.use('/getRequestsByStore', checkByStoreRouter);

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
