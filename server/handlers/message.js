const db = require("../modules/index");

exports.addMessage = async function(req,res,next){
    try{
        const{id} = req.params;
        const messageBody = req.body.message;
        const replicent = req.body.replicentEmail;
        const sender = await db.user.findById(id);
        const reciver = await db.user.findOne({email:replicent});
        sender.messageSent.push({
            sentTo: reciver._id, 
            body: messageBody,
        });
        await sender.save();
        reciver.messageRecived.push({
            recivedFrom: id,
            body: messageBody,
        });
        await reciver.save();
        return res.status(200).json({
            message: "Message has been sent successfully",
        })
    }catch(err){
        return next({
            status: 400,
            message: "Cannot send the message due to some Error",
        })
    }
}

exports.fetchAllRecivedMessages = async function(req,res,next){
    try{
        let {id} = req.params;
        let user = await db.user.findById(id);
        const recivedMessage = user.messageRecived;
        res.status(200).json({
            messages: recivedMessage,
        })
    }catch(err){
        return next({
            ...err,
            status: 400,
            message: "Not able to fetch messages from Database",
        })
    }
}

exports.fetchAllSentMessages = async function(req,res,next){
    try{
        let {id} = req.params;
        let user = await db.user.findById(id);
        const sentMessage = user.messageSent;
        res.status(200).json({
            messages: sentMessage,
        })
    }catch(err){
        return next({
            ...err,
            status: 400,
            message: "Not able to fetch messages from Database",
        })
    }
}