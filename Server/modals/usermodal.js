const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
name:{
    required:true,
    type:String
},
sirname:{
    required:true,
    type:String
},
contact:{
    required:true,
    type:Number
},
email:{
    required:true,
    type:String
},
address:{
    required:true,
    type:String
},
password:{
    required:true,
    type:String
}
})


const User= mongoose.model("User",userSchema)

module.exports=User