const db = require("../modules/index"),
    jwtToken = require("jsonwebtoken");
exports.signup = async function(req,res,next){
    try{
        const user = await db.user.create(req.body);
        const{_id,username,email} = user;
        const token = jwtToken.sign({
            _id,
            username,
            email
        },process.env.SECRET_KEY);
        return res.status(200).json({
            _id,
            username,
            email,
            token
        })
    }catch(err){
        return next({
            ...err,
            status: 400,
            message: "Username or Email already exist",
        })
    }
}

exports.signin = function(req,res,next){
    //signin will be here
}