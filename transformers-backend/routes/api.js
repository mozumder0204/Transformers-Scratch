var express = require('express');
var authRouter = require('./auth');
var transformerRouter = require('./transformer');

var app = express();

app.use('/auth/', authRouter);
app.use('/transformers/', transformerRouter);

module.exports = app;
