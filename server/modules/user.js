const mongoose = require("mongoose"),
    bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    following:[{
        type: mongoose.Schema.Types.ObjectId,
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
    }],
    messageSent:[{
        type: mongoose.Schema.Types.ObjectId,
        body: String,
    }],
    messageRecived:[{
        type: mongoose.Schema.Types.ObjectId,
        body: String,
    }]
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }else{
        const hashedPassword = await bcrypt.hash(this.password,10);
        this.password = hashedPassword;
        return next();
    }
})

userSchema.methods.comparePassword = async function(input,next){
    try{
        const compare = await bcrypt.compare(input,this.password);
        return compare;
    }catch(err){
        return next(err);
    }
}

module.exports = mongoose.model("user",userSchema);