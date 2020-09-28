require('dotenv/config');
var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.use(express.json());

app.use((req, res, next) => {
 res.append('Access-Control-Allow-Origin', ['*']);
 res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
 res.append('Access-Control-Allow-Headers', 'Content-Type');
 next();
});




app.get("*", (req, res) => {
 res.send("Hello");
}); 

// const mongoDB = 'mongodb://127.0.0.1/my_database';
// const db = mongoose.connection;
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true })



mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));



module.exports = app;
app.listen(8000, () => {console.log("Hello buddy")})