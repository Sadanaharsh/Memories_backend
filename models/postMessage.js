// Here we will utilise the possibilities of mongoose.
// Designing the model of our database.

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    // Each post should have these properties
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String], // Array of strings
    selectedFile: String, // Convert image to the string.
    likes: {
        type: [String],
        default: [],
    },

    createdAt: {
        type: Date,
        default: new Date()
    }

});

// Turning this Schema into the model (collection).

const PostMessage = mongoose.model('PostMeassage', postSchema);

export default PostMessage;
