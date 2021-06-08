var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var routes = require('./routes/routes');
var app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const PORT = 4000;
app.use('/', routes);
// routes(app);


// app.use('/users', usersRouter);
// app.use('/testAPI', testAPIRouter);
// app.use('/quotes', quotes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


mongoose.Promise = global.Promise;
console.log("above mongodb connect");
mongoose.connect('mongodb://localhost/moodydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//bodyparer setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// error handler


app.listen(PORT, () =>{
  console.log("app.listen");
})

console.log("mongoose connection status: ", mongoose.connection.readyState);

module.exports = app;
