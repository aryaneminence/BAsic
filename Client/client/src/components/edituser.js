import React,{useState,useEffect} from 'react'
import { TextField ,Button} from '@mui/material'
import { editUser ,getUser} from '../services/api'
import {useParams} from 'react-router-dom'
function Edituser({id}){
 const [user,setUser]=useState({
name:"",
sirname:"",
contact:"",
address:""
 })

 useEffect(()=>{
getInnfo(id)
 },[])


console.log(id,"16")
const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
console.log(user)
}



const getInnfo=async(id)=>{
try {getUser(id)
} catch (error) {
console.log(error)  
}}


const handleSubmit=async(id)=>{
editUser(id,user)
console.log(id,'29')
}
return(
        <>
<h1>Edit User</h1>
  <TextField id="outlined-basic" label="name" variant="outlined" onChange={(e)=>handleChange(e)} name='name'/>
  <TextField id="outlined-basic" label="sirname" variant="outlined" onChange={(e)=>handleChange(e)} name='sirname'/>
  <TextField id="outlined-basic" label="contact" variant="outlined" onChange={(e)=>handleChange(e)} name='contact'/>
  <TextField id="outlined-basic" label="address" variant="outlined" onChange={(e)=>handleChange(e)} name='address'/>
  <br/>

    <Button variant='contained'onClick={()=>handleSubmit(id)}> Edit User</Button>
        
        
        </>
    )
}


export default Edituser