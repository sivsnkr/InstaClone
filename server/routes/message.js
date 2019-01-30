const express = require("express"),
    app = express.Router({mergeParams:true}),
    message = require("../handlers/message");


app.post("/",message.addMessage);
app.get("/sentMessages",message.fetchAllSentMessages);
app.get("/recivedMessages",message.fetchAllRecivedMessages);

module.exports = app;