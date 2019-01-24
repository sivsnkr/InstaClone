function errHandler(err,req,res,next){
    return res.status(err.status||500).send({
        message: err.message,
    })
}

module.exports = errHandler;