import Navbar from '../Components/Navbar/Navbar';
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext';

const DisplayNav = () => {
    let { user } = useContext(AuthContext)
    console.log("Hey")
    return !user ? <></> : <Navbar/>;
}

export default DisplayNav;