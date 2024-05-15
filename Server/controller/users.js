const User=require('../modals/usermodal')
const { get } = require('../routes/users')
const addUser=async(req,res)=>{
try {
const {name,sirname,contact,address}=req.body
if(!name ||!sirname ||!contact ||!address){
   return res.status(400).json({
        status:false,
        msg:"Please provide all details"
    })
}
const user= new User({
    name:name,
    sirname:sirname,
    contact:contact,
    address:address
})
 user.save() 
 res.status(200).json({
    status:true,
    msg:"user added sucessfully",
    data:user
 })

} catch (error) {
console.log(error)
res.status(500).json({
    status:false,
    msg:error
})
}
}
const allUser=async(req,res)=>{
try {

const alldata= await User.find()
console.log(alldata)
res.status(200).json({
    status:true,
    msg:"All data get sucessfully",
    data:alldata
})
} catch (error) {
console.log(error)
res.status(500).json({
 status:false,
msg:error
    })  
}
}
const editUser=async(req,res)=>{
try {
  const id=req.params.id
  const {name,sirname,contact,address}=req.body
  const updateUseer=await User.findByIdAndUpdate(id,{
    name:name,
    sirname:sirname,
    contact:contact,
    address:address
  })
  res.status(200).json({
    status:true,
    msg:"User updated sucessfully",
    data:updateUseer
  })
} catch (error) {
console.log(error)
res.status(500).json({
    status:false,
    msg:error
})
    }
}

const  delUser=async(req,res)=>{
    try {
 const id=req.params.id
 const deluser=await User.findByIdAndDelete(id)    
 res.status(200).json({
    status:true,
    msg:"User deleted Sucessfully",
    data:deluser

 }) } catch (error) {
console.log(error)
res.status(500).json({
    status:false,
    msg:error
})
    }
}

const getUser=async(req,res)=>{
try {
   const id=req.params.id
   const user=await User.findById(id)
res.status(200).json({
    status:true,
    msg:"User get sucessfully",
    data:user,
})
} catch (error) {
console.log(error)
res.status(500).json({
status:false,
msg:error
    })  
}
}


module.exports={
    addUser,
    allUser,
    editUser,
    delUser,
    getUser
}