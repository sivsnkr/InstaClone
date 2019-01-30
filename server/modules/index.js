const mongoose = require("mongoose"),
    user = require("./user"),
    post = require("./post");
mongoose.connect("mongodb://localhost/InstaClone");
mongoose.set("debug",true);
mongoose.Promise = Promise;
module.exports = {
    user: user,
    post: post,
}