import React,{useState} from 'react'
import { TextField,Button } from '@mui/material'
import { login } from '../../services/api'
import { useNavigate } from 'react-router-dom'

function Login(){
const navigate=useNavigate()    
const [userlogin,Setlogin]=useState({
email:"",
password:""
})
const handlechange=async(e)=>{
Setlogin({...userlogin,[e.target.name]:e.target.value})
}
const submit=async(userlogin)=>{
    try {
  const response=await login(userlogin)
  localStorage.setItem("token",response.token)
navigate("/")   
    } catch (error) {
      console.log(error)  
    }
}
return (
 <>
 <h1>LOGIN</h1>
<TextField id="outlined-basic" label="email" variant="outlined" onChange={(e)=>handlechange(e)} name='email'/><br/>
<TextField id="outlined-basic" label="password" variant="outlined"  onChange={(e)=>handlechange(e)} name='password' />  
<br/>     
<Button onClick={()=>submit(userlogin)} variant='contained'>Submit</Button>
        </>
    )
}

export default Login