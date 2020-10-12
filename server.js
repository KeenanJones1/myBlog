require('dotenv/config');
var express = require('express');
var mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')

// express setup
var app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
console.log("Starting server");
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);



app.get("*", (req, res) => {
 res.send("Hello");
}); 


// Mongoose set up
console.log("Connecting to MongoDB")
mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true}, err => {
 err ? console.log(err) : console.log("MongoDB connection estbalished")
})

module.exports = app;
