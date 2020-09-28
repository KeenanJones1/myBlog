const mongoose = require('mongoose')
// Using mongoose 

const Schema = mongoose.Schema;
// Using mongoose Schema

const PostModeSchema = new Schema({
 //  name: String, 

})



// var SomeModelSchema = new Schema({
//  a_string: String,
//  a_date: Date
// });


// var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
// ObjectId: Represents specific instances of a model in the database. For example, a book might use this to represent its author object. This will actually contain the unique ID (_id) for the specified object. We can use the populate() method to pull in the associated information when needed.


const PostModel = mongoose.model('PostModel', PostModelSchema);