const express = require("express"),
    app = express.Router({mergeParams:true})
    post = require("../handlers/post");

//all routes start here
app.post("/",post.createPost);
module.exports = app;