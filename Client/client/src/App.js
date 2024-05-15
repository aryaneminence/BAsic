import {TextField} from '@mui/material'
import Adduser from './components/Adduser';
import BasicModal from './modals/addusermodal';
import EditModal from './modals/editmodal';
import Alluser from './components/Alluser';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
<BasicModal/>
<EditModal/>
<Alluser/>
{/* <Adduser /> */}

    </>
  );
}

export default App;
