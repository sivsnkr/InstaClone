const db = require("../modules/index");

exports.signup = async function(req,res,next){
    const user = await db.user.create(req.body);
    return res.status(200).json(user);
}

exports.signin = function(req,res,next){
    //signin will be here
}