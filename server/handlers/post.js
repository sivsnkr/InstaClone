const db = require("../modules/index");

exports.fetchAllPost = async function(req,res,next){
    try{
        let posts = await db.post.find();
        return res.status(200).json({
            posts,
        })
    }catch(err){
        return next({
            ...err,
            status: 400,
            message: "Problem in Fetching posts",
        })
    }
}

exports.createPost = async function(req,res,next){
    try{
        const {url,caption} = req.body;
        const{id} = req.params;
        let post = await db.post.create({
            url,
            caption,
            creator:id,
        })
        return res.status(200).json(post);
    }catch(err){
        return next({
            status: 400,
            message: "Error while Pushing post"
        });
    }
}

exports.deletePost = async function(req,res,next){
    try{
        const p_id = req.params.p_id;
        const postToBeDeleted = await db.post.findById(p_id);
        await postToBeDeleted.remove();
        return res.status(200).json(postToBeDeleted);
    }catch(err){
        return next({
            status: 400,
            message: "Error occurred while Deleting post",
        })
    }
}

exports.addCommentOnPost = async function(req,res,next){
    try{
        let{id,p_id} = req.params;
        let body = req.body.body;
        const findPost = await db.post.findById(p_id);
        //creating the comment body
        const comment = {
            commentor:id,
            body:body,
        }
        findPost.comments.push(comment);
        let post = await findPost.save();
        return res.status(200).json(post);
    }catch(err){
        next({
            status:400,
            message:"Couldn't Add the comment"
        })
    }
}

exports.deleteCommentOnPost = async function(req,res,next){
    try{
        const{p_id,comnt_id} = req.params;
        let post = await db.post.findById(p_id);
        let comment = post.comments.filter(comment=>comment._id!=comnt_id);
        post.comments = comment;
        let savedPost = await post.save();
        return res.status(200).json(savedPost);

    }catch(err){
        return next({
            status:400,
            message: "Error Occurred while Deleting Comment",
        })
    }
}

exports.likePost = async function(req,res,next){
    try{
        let{id,p_id} = req.params;
        let post = await db.post.findById(p_id);
        post.likes.push(id);
        let savedPost = await post.save();
        return res.status(200).json(savedPost);
    }catch(err){
        return next({
            status: 400,
            message: "Something went wrong while Liking the Post",
        })
    }
}

exports.unlikePost = async function(req,res,next){
    try{
        let{id,p_id} = req.params;
        let post = await db.post.findById(p_id);
        post.likes.remove(id);
        let savedPost = await post.save();
        return res.status(200).json(savedPost);
    }catch(err){
        return next({
            status: 400,
            message: "Something went wrong while Liking the Post",
        })
    }
}