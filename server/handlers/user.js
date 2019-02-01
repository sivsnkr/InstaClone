const db = require("../modules/index"),
    jwtToken = require("jsonwebtoken");
exports.signup = async function(req,res,next){
    try{
        const user = await db.user.create(req.body);
        const{_id,username,email,followers,following,profilePic} = user;
        const token = jwtToken.sign({
            _id,
            username,
            email,
            profilePic,
            followers:followers,
            following:following,
        },process.env.SECRET_KEY);
        return res.status(200).json({
            _id,
            username,
            email,
            profilePic,
            followers:followers,
            following:following,
            token
        })
    }catch(err){
        if(err.code === 11000){
            err.message = "Username or Email already exist"
        }else{
            err.message = "Cannot signup Successfully, Error occurred"
        }
        return next({
            ...err,
            status: 400,
            message: err.message
        })
    }
}

exports.signin = async function(req,res,next){
    try{
        const {email,password} = req.body;
        let user = await db.user.findOne({email: email});
        let passwordCheck = await user.comparePassword(password);
        if(passwordCheck){
            const{_id,username,email,followers,following,profilePic} = user;
            const token = jwtToken.sign({
                _id,
                username,
                email,
                profilePic,
                followers:followers,
                following:following,
            },process.env.SECRET_KEY);
            return res.status(200).json({
                _id,
                username,
                email,
                profilePic,
                followers:followers,
                following:following,
                token
            })
        }else{
            return next({
                status: 401,
                message: "wrong username or password",
            })
        }
    }catch(err){
        return next({
            ...err,
            status:401,
            message: "Something went wrong while sign in",
        })
    }
}

exports.allUsers = async function(req,res,next){
    try{
        let users = await db.user.find();
        users = users.map(user=>{
            return {
                username:user.username,
                id: user._id,
            }
        })
        return res.status(200).json({
            users,
        })
    }catch(err){
        return next({
            status: 400,
            message: "Error occurred while fetching users list",
        })
    }
}

exports.follow = async function(req,res,next){
    try{
        const {id,f_id} = req.params;
        let user = await db.user.findById(id);
        if(user.following.indexOf(f_id) < 0){
            user.following.push(f_id);
            await user.save();
        }
        let following = await db.user.findById(f_id);
        if(following.followers.indexOf(id) < 0){
            following.followers.push(id);
            await following.save();
        }
        return res.status(200).json(user)
    }catch(err){
        return next({
            status: 400,
            message: "Failed to follow",
        })
    }
}

exports.unfollow = async function(req,res,next){
    try{
        const {id,f_id} = req.params;
        let user = await db.user.findById(id);
        user.following.remove(f_id);
        await user.save();
        let following = await db.user.findById(f_id);
        following.followers.remove(id);
        await following.save();
        return res.status(200).json(user)
    }catch(err){
        return next({
            status: 400,
            message: "Failed to unfollow",
        })
    }
}