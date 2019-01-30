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