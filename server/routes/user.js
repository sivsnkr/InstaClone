const express = require("express"),
    app = express.Router({mergeParams:true}),
    auth = require("../handlers/user");

app.post("/signup",auth.signup);
app.post("/signin",auth.signin);
app.get("/:id",auth.allUsers);
app.get("/:id/follow/:f_id",auth.follow);
app.get("/:id/unfollow/:f_id",auth.unfollow);
module.exports = app;