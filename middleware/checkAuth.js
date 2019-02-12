const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    console.log(req.headers.authorization);
    // try{
    //     const token = 

    // }catch(error){
    //     return res.status(401).json({
    //         message: 'Auth Failed'
    //     })
    // }
};