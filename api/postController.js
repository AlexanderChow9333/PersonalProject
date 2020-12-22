// postController.js
// Import post model
Post = require('./postModel');
// Handle index actions
exports.index = function (req, res) {
    Post.get(function (err, posts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Posts retrieved successfully",
            data: posts
        });
    });
};
// Handle create post actions
exports.new = function (req, res) {
    var post = new Post();
    post.username = req.body.username ? req.body.username : post.username;
    post.comment = req.body.comment;
    post.postID = req.body.postID;
// save the post and check for errors
    post.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New post created!',
            data: post
        });
    });
};
// Handle view post info
exports.view = function (req, res) {
    Post.findById(req.params.post_id, function (err, post) {
        if (err)
            res.send(err);
        res.json({
            message: 'Post details loading..',
            data: post
        });
    });
};
// Handle update post info
exports.update = function (req, res) {
Post.findById(req.params.post_id, function (err, post) {
        if (err)
            res.send(err);
post.name = req.body.name ? req.body.name : post.name;
        post.gender = req.body.gender;
        post.email = req.body.email;
        post.phone = req.body.phone;
// save the post and check for errors
        post.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Post Info updated',
                data: post
            });
        });
    });
};
// Handle delete post
exports.delete = function (req, res) {
    Post.remove({
        _id: req.params.post_id
    }, function (err, post) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Post deleted'
        });
    });
};