import { Navigate } from "react-router-dom";

function ProtectedRoute({authenticated,children}){
    return (
<>{authenticated ?children:<Navigate to='/log'/>}
 </>
    
)}

export default ProtectedRoute