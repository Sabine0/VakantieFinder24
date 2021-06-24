const jwt = require('jsonwebtoken');
const secret = "jhgfdsjhy23334ui7yfr378ferbjhefdjh";

module.exports = function(req, res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access denied');

    try{
        const verified = jwt.verify(token, secret);
        req.user = verified;
        next();
    }catch (err) {
        res.status(400).send("Invalid token");
    }
}
