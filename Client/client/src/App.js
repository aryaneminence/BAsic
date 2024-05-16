import { useState,useEffect } from 'react';
import {TextField} from '@mui/material'
import Adduser from './components/Adduser';
import BasicModal from './modals/addusermodal';
import EditModal from './modals/editmodal';
import Alluser from './components/Alluser';
import Register from './components/Auth/Regsiter.js';
import Login from './components/Auth/Login.js';
import ProtectedRoute from './components/ProtectedRoute/index.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PermanentDrawerLeft from './components/Sidebar.js';
function App() {

const [authenticated,Setauthenticated]=useState(false)


useEffect(()=>{
  const token=localStorage.getItem("token")
  console.log(token)
  if(token){
    Setauthenticated(true)
  }
},[])
  return (
    <>
<BrowserRouter>
   <Routes>

   <Route path="/" element={<ProtectedRoute authenticated={authenticated}><PermanentDrawerLeft/></ProtectedRoute>} />
         <Route path='/reg' element={<><Register/></>}></Route>
         <Route path='/log' element={<><Login  authenticated={authenticated}/></>}></Route>

   </Routes>

</BrowserRouter>

{/* <BasicModal/>
<EditModal/>
<Alluser/> */}
{/* <Adduser /> */}

    </>
  );
}

export default App;
