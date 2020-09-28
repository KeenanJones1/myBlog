const mongoose = require('mongoose');
// Allow use of mongoose



const mongoDB = 'mongodb://127.0.0.1/my_database';
// defines a database that mogoonse will connect with 

mongoose.connect(mongoDB, { useNewUrlParser: true });
// connecting mongoose to mongodb
// mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })


const db = mongoose.connection;
// saving the connected db reference to an variable 

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Allows notifications if errors occure with mongodb
