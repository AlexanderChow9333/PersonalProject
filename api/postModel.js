// postModel.js
var mongoose = require('mongoose');
// Setup schema
var postSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    postID: {
      type: String,
      required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Post model
var Post = module.exports = mongoose.model('post', postSchema);
module.exports.get = function (callback, limit) {
    Post.find(callback).limit(limit);
}