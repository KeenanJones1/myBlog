require('dotenv/config');
var express = require('express');
var mongoose = require('mongoose');
var app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


app.get("*", (req, res) => {
 res.send("Hello");
}); 

// const mongoDB = 'mongodb://127.0.0.1/my_database';
// const db = mongoose.connection;
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true }, () => {
 console.log("Hey DB")
})






mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));



module.exports = app;
app.listen(8000)