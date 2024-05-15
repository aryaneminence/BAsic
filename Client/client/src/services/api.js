import axios from 'axios'
const Url=process.env.Url

export const adduserinfo=async(data)=>{
  const response =  await axios.post(`http://localhost:5000/adduser`,data)
return response
}
export const allUser=async()=>{
const response =await axios.get('http://localhost:5000/alluser')
return response
}
export const editUser=async(id,data)=>{
const response= await axios.put(`http://localhost:5000/edituser/${id}`,data)
return response
}

export const  getUser=async(id)=>{
const response= await axios.get(`http://localhost:5000/getuser/${id}`)
}

export const delUser=async(id)=>{
    const response =await axios.delete(`http://localhost:5000/deluser/${id}`)
}