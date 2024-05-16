import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { register } from '../../services/api';
import Box from '@mui/material/Box';
function Register(){
const [details,setdetails]=useState({
    name:"",
    sirname:"",
    email:"",
    contact:"",
    address:"",
    password:""
})

const handlechange=(e)=>{
setdetails({...details,[e.target.name]:e.target.value})
console.log(details)
}
const handleSubmit =async(details)=>{
try {
await register(details)
} catch (error) {
  console.log(error) 
    }
}
return (

 <>
<Box
height={400}
width={500}
my={4}
alignItems="center"
gap={8}
p={2}
sx={{ border: '2px solid grey' }}
    >
<h1> Register</h1>
<TextField id="outlined-basic" label="name" variant="outlined" onChange={(e)=>handlechange(e)} name='name'/>
<TextField id="outlined-basic" label="sirname" variant="outlined"  onChange={(e)=>handlechange(e)} name='sirname' />
<TextField id="outlined-basic" label="email" variant="outlined"  onChange={(e)=>handlechange(e)}  name='email'/>
<TextField id="outlined-basic" label="contact" variant="outlined" onChange={(e)=>handlechange(e)}  name='contact' />
<TextField id="outlined-basic" label="address" variant="outlined"  onChange={(e)=>handlechange(e)}  name='address'/>
<TextField id="outlined-basic" label="password" variant="outlined" onChange={(e)=>handlechange(e)}   name='password'/>


<Button variant="contained" onClick={()=>handleSubmit(details)}>Register</Button>


    </Box>

      

        
        </>
    )
}

export default Register