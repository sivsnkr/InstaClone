function errHandler(err,req,res,next){
    return res.status(err.status||500).next({
        message: err.message,
    })
}

module.exports = errHandler;