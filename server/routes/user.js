const express = require("express"),
    app = express.Router(),
    auth = require("../handlers/user");

app.post("/signup",auth.signup);
//app.post("/signin",auth.signin);

module.exports = app;