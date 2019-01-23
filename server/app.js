const express = require("express"),
    error = require("./handlers/Error"),
    app = express();

app.use(error);
app.listen(3001,function(){
    console.log("InstaClone is active...");
})