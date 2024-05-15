import mongoose from "mongoose";
const { Schema } = mongoose;

var blogSchema = new Schema({
    slug: String,
    title: String,
    author: String,
    description: String,
    body: String,
    likes: Number,
    views: Number
}, { collection: 'blogposts' });


const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;