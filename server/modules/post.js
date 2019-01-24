const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    url:{
        type: String,
        required: true,
    },
    caption:{
        type: String,
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    comments:[{
        commentor:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        body:{
            type: String,
            required: true,
        }
    }]
})

module.exports = mongoose.model("post",postSchema);