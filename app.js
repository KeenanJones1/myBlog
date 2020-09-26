var createError = require('http-errors');
var express = require('express');
var cors = require("cors");
var mongoose = require('mongoose');
require('dotenv/config');

var app = express();

app.use(cors());
app.use(express.json());








// mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true })

module.exports = app;
app.listen(3000, () => {console.log("Hello buddy")})