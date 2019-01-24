const db = require("../modules/index");

exports.signup = async function(req,res,next){
    try{
        const user = await db.user.create(req.body);
        return res.status(200).json(user);
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