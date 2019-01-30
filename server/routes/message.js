const express = require("express"),
    app = express.Router({mergeParams:true}),
    message = require("../handlers/message");


app.post("/",message.addMessage);

module.exports = app;