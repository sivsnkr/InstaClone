const db = require("../modules/index");

exports.addMessage = async function(req,res,next){
    try{
        const{id,reciver_id} = req.params;
        const messageBody = req.body.message;
        const sender = await db.user.findById(id);
        sender.messageSent.push({
            sentTo: reciver_id, 
            body: messageBody,
        });
        await sender.save();
        const reciver = await db.user.findById(reciver_id);
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