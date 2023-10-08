import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext';
import LoginPage from '../Pages/Login/LoginPage';

const PrivateRoute = ({children, ...rest}) => {
    let { user } = useContext(AuthContext)
    
    if(!user){
        return  <Navigate to='/login'/>
    }
    
    else{
        console.log(children)
        return children;
    }

    // return !user ? <Navigate to='/login'/> : children;
}

export default PrivateRoute;