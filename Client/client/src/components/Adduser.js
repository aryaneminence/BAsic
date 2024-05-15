import {TextField,Button,} from '@mui/material'
import React,{useState} from 'react'
import { adduserinfo } from '../services/api'
function Adduser() {
const [user,setuser]=useState({
  name:"",
  sirname:"",
  contact:"",
  address:""
})

const handleChange=(e)=>{
  setuser({...user,[e.target.name]:e.target.value})
  console.log(user)
}

const handleSubmit=async()=>{
  console.log(user)
  adduserinfo(user)

}
 return (
    <>  
<h1> Add User</h1>
<TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>handleChange(e)} name="name"/>
<TextField id="outlined-basic" label="Sirname" variant="outlined"onChange={(e)=>handleChange(e)} name="sirname" />
<TextField id="outlined-basic" label="Contact " variant="outlined" onChange={(e)=>handleChange(e)} name="contact"/>
<TextField id="outlined-basic" label="Address" variant="outlined"onChange={(e)=>handleChange(e)} name="address"/>
<br/>
 
<Button onClick={handleSubmit} variant='contained'>Submit</Button>
    </>
  )
}

export default Adduser