const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User = require('../modals/usermodal')
const Uer= require('../modals/usermodal')
const register=async(req,res)=>{
try {
    const {name,sirname,email,contact,address,password}=req.body
    const existingUser= await User.findOne({email})
    if(existingUser){
   return res.status(400).json({
    status:false,
    msg:"Email Already exists"})}
    const protectedPassword= await bcrypt.hash(password,10)
    const newUser=await new User({
            name:name,
            sirname:sirname,
            email:email,
            contact:contact,
            address:address,
            password:protectedPassword
        })
    
    await newUser.save()
    res.status(200).json({
        status:true,
        msg:"User registration is ssucessfull"
    })
     
} catch (error) {
    console.log(error)
    res.status(500).json({
    status:false,
    msg:error
    })
}
}  
const login=async(req,res)=>{
const {email,password}=req.body
if(!email ||!password){
 return res.status(400).json({
 status:false,
msg:"please provide all details"
})}
const user= await User.findOne({email})
if(!user){
    res.json("Not a user")
}
const checkPassword= await bcrypt.compare(password,user.password)
if(!checkPassword){
return res.status(401).json({
 status:false,msg:"Please enter valid Password"})
}
const token =jwt.sign({email:user.email},'123@')
res.status(200).json({
    status:true,
    data:token
})}


module.exports={
register,
login}