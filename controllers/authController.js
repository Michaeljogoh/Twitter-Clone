const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Sign Up
const register = async (req , res)  =>{
const {name , email , username , password , password2 } = req.body;
    //Validation
    if(!name || !email || !username || !password || !password2 ){
        res.status(204).json({error:"Please fill in all field"})
    }

    if(password !== password2){
        res.status(204).json({error:"password does not match"})

    }

    if(password < 6){
       res.status(204).json({error:"password must not be less than six characters"})
    }
    
const newEmail = await Users.findOne({email : email })

    if (newEmail){
        res.status(204).json({error:"Email already registered"})
      } 

const newUser = await Users.findOne({username : username})

    if(newUser){

        res.status(204).json({error:"Username already exists!"})


    }  else {
const newUser = new Users({name , email , username ,  password , password2})
        //Hash password
        const  hashedPassword = await bcrypt.hash(newUser.password, 10)

        newUser.password = hashedPassword

        await newUser.save();
        res.status(200).json({newUser})

    }

    }
   
    


// Sign In
const login = async  (req , res ) =>{
    const {username , password} = req.body;

    if(!username || !password){
       res.status(400).json("please add email or password")
    }

const savedUser =  await Users.findOne({username:username})
        if(!savedUser){
         res.status(404).json({error:"Invalid Username"})
        }

const doMatch =  await  bcrypt.compare(password, savedUser.password)
            if(doMatch){
               const token = jwt.sign({user_id:savedUser}, process.env.JWT_SECRET , {expiresIn : '1d'})
               res.status(200).json({token, user:savedUser})
            } else {
                return res.status(401).json("Invaild Password")
            }
           
      
       
        }











const logout = async (req , res) =>{
    res.cookie("jwt" , "")

}





const changePassword = async (req , res) =>{
  
  const {authorization} = req.headers;

  const {  newPassword } = req.body;

  const token = authorization.replace("Bearer ","");

  const user = jwt.verify(token , process.env.JWT_SECRET)
  
  const _id = user._id

  const  password = await bcrypt.hash(newPassword , 10)
  
  const update =  await Users.updateOne({_id},{$set:{ password}})

  res.status(200).json({update})
    

}
module.exports = {register , login , changePassword, logout}