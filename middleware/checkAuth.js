const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    try{
        console.log('HEADERS',req.headers);
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        console.log('CHECK AUTH TRIGGERED!!');
        next();
    }catch(error){
        console.log(error);
        return res.status(401).json({
            message: 'Auth Failed'
        })
    }
};