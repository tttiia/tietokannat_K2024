var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 
 
var app = express();
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
 
module.exports = app;

const opiskelijaRouter = require('./routes/opiskelija');
app.use('/opiskelija', opiskelijaRouter);

const opintojaksoRouter = require('./routes/opintojakso');
app.use('/opintojakso', opintojaksoRouter);

const arviointiRouter = require('./routes/arviointi');
app.use('/arviointi', arviointiRouter);