const express = require("express"),
    app = express.Router(),
    auth = require("../handlers/user");

app.post("/signup",auht.signup);
app.post("/signin",auth.signin);

module.exports = app;