const db = require("../modules/index");

exports.createPost = async function(req,res,next){
    try{
        const {url,caption} = req.body;
        const{_id} = req.params;
        let post = await db.post.create({
            url,
            caption,
            creator:_id
        })
        return res.status(200).json(post);
    }catch(err){
        return next({
            status: 400,
            message: "Error while Pushing post"
        });
    }
}