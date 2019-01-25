const express = require("express"),
    app = express.Router({mergeParams:true}),
    message = require("../handlers/message");


app.post("/:reciver_id",message.addMessage);

module.exports = app;