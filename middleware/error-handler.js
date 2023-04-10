const { customAPIError } = require("../errors/custom-error");

module.exports = (err, req, res, next)=>{

    if(err instanceof customAPIError) return res.status(err.statusCode).json({mgs: err.message})

    console.log(err.message)
    
    res.status(500).json({msg: 'Something went wrong. Please try again later.'});
    next();
}