const express = require("express"),
    error = require("./handlers/Error"),
    cors = require("cors"),
    app = express();

app.use(cors());
app.use(error);
app.listen(3001,function(){
    console.log("InstaClone is active...");
})