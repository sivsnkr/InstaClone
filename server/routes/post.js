const express = require("express"),
    app = express.Router({mergeParams:true})
    post = require("../handlers/post");

//all routes start here
app.post("/",post.createPost);
app.post("/:p_id/add_comment",post.addCommentOnPost);
app.delete("/:p_id/delete",post.deletePost);
module.exports = app;