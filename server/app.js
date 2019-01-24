require("dotenv").config();
const express = require("express"),
    error = require("./handlers/Error"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    user = require("./routes/user"),
    post = require("./routes/post"),
    app = express();

app.use(cors());
app.use(bodyParser.json());
//setting different routes
app.use("/api/user",user);
//app.use("/api/user/:id/post",post);
//setting routes ends here
app.use(error);
app.listen(3001,function(){
    console.log("InstaClone is active...");
})