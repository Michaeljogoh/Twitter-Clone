const jwt = require('jsonwebtoken');
const Users = require('../models/Users');


const ensureAuthorization = async (req , res , next) =>{
    const {authorization} = req.headers;
    if(!authorization){
        res.status(401).json({error: "You must login in"})
    }
  const token = authorization.replace("Bearer ","")
  jwt.verify(token , process.env.JWT_SECRET , (err , payload) =>{
        if(err){
            return res.status(401).json({error:"You must login in"})
        }
        const {_id} = payload
        Users.findById(_id).then(userdata =>{
            req.user = userdata
        })
        next()
  })

} 

module.exports = { ensureAuthorization }