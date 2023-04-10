

module.exports = (req, res, next)=>{

    res.json('Route not found');
    next();
}