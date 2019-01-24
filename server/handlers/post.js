const db = require("../modules/index");

exports.createPost = async function(req,res,next){
    try{
        const {url,caption} = req.body;
        const{id} = req.params;
        console.log(id);
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
        let post = findPost.save();
        return res.status(200).json(post);
    }catch(err){
        next({
            status:400,
            message:"Couldn't Add the comment"
        })
    }
}