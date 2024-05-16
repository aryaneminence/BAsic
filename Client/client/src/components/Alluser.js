import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button,TextField } from '@mui/material';
import { useState,useEffect } from 'react'
import { allUser,delUser } from '../services/api'
import EditModal from '../modals/editmodal';
function Alluser() {
const [users,Setusers]=useState([]) 
const [search,setsearch]=useState('')

console.log(users,"22222")
useEffect(()=>{
getAll()
},[])
console.log(users,"22222")

const Search=(e)=>{
  setsearch(e.target.value)
  console.log(e.target.value)
}
const getAll=async()=>{
  try {
    const response = await allUser()
    console.log(response.data.data,"11"); 
    Setusers(response.data.data);     
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
const deleteUser=async(id)=>{
  try {
    await delUser(id)
  } catch (error) {
    console.log(error)
  }
}
const filterSearch= users.filter((user)=>(
  user.name.toLowerCase().includes(search.toLowerCase())||
  // user.name.toLowerCase().includes(search.toLowerCase()) ||
  user.sirname.toLowerCase().includes(search.toLowerCase()) ||
  user.contact.toString().includes(search) ||
  user.address.toLowerCase().includes(search.toLowerCase())
))

  return (
    <>
   
  <h1>ALL Users</h1>
  <TextField onChange={(e)=>Search(e)}></TextField>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { filterSearch.map((user) => (
            <TableRow
              key={user._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user._id}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.sirname}</TableCell>
              <TableCell align="right">{user.contact}</TableCell>
              <TableCell align="right">{user.address}</TableCell>
              <TableCell align="right">{user.contact}</TableCell>
              <TableCell align="right"><EditModal   id={user._id}/></TableCell>
              <TableCell align="right">
                <Button  onClick={()=>deleteUser(user._id)}> Delete  </Button >
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default Alluser