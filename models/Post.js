const mongoose = require('mongoose')
// Using mongoose 

const Schema = mongoose.Schema;
// Using mongoose Schema

const PostModelSchema = new Schema({
 title: {
  type: String,
  required: true,
 }, 
 body: {
  type: Schema.Types.Mixed,
  required: true
 },
 featured: {
  type: Boolean, 
  default: false
 },
 like_count: Number,
 published: {
  type: Boolean,
  required: true,
  default: false,
 },
 published_on: {
  type: Date, 
  required: false, 
 },
 tags: {
  type: Array,
  required: false
 }
})



// var SomeModelSchema = new Schema({
//  a_string: String,
//  a_date: Date
// });


// var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
// ObjectId: Represents specific instances of a model in the database. For example, a book might use this to represent its author object. This will actually contain the unique ID (_id) for the specified object. We can use the populate() method to pull in the associated information when needed.


const PostModel = module.exports = mongoose.model('Posts', PostModelSchema);