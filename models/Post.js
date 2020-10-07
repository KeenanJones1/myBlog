const mongoose = require('mongoose')


const Schema = mongoose.Schema;


const PostModelSchema = new Schema({
 title: {type: String, required: true},
 createdAt: {type: Date, required: true},
 tags: {type: [String]},
 // Tutorial body is the html
 body: {type: String, required: true},
 excerpt: {type: String, required: true}
})




const PostModel = module.exports = mongoose.model('Posts', PostModelSchema);