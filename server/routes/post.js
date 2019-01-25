const express = require("express"),
    app = express.Router({mergeParams:true})
    post = require("../handlers/post");

//all routes start here
app.post("/",post.createPost);
app.delete("/:p_id/delete",post.deletePost);
//all routes for post comments
app.post("/:p_id/add_comment",post.addCommentOnPost);
app.delete("/:p_id/delete_comment/:comnt_id",post.deleteCommentOnPost);
//post for likeing the post
app.get("/:p_id",post.likePost);
app.delete("/:p_id",post.unlikePost);
module.exports = app;