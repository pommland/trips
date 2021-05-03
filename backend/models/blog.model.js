const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  username: { type: String, required: true },
  topic: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  image : {type:String,required : true}
}, {
  timestamps: true,
});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;