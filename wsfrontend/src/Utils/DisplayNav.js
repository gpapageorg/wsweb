import Navbar from '../Components/Navbar/Navbar';
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext';

const DisplayNav = () => {
    let { user } = useContext(AuthContext)
    return !user ? <></> : <Navbar/>;
}

export default DisplayNav;