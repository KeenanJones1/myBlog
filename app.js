var createError = require('http-errors');
var express = require('express');
const path = require('path');
var cors = require("cors");
var mongoose = require('mongoose');
require('dotenv/config');

var app = express();

app.use(cors());
app.use(express.json());





app.get("*", (req, res) => {
 res.sendFile(path.join(__dirname + "/client/home.html"));
}); 


// mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true })

module.exports = app;
app.listen(8000, () => {console.log("Hello buddy")})