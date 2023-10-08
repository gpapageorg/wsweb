import { useContext } from 'react'
import AuthContext from '../Context/AuthContext';

const IsLogged = () => {
    let { user } = useContext(AuthContext)
    if(user) {
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = function(event) {
          window.history.go(1);
        };
}
      
}

export default IsLogged;