import React, {useContext} from 'react'
import AuthContext from '../../Context/AuthContext'
import './LoginPage.css'
const LoginPage = () => {

    let {loginUser} = useContext(AuthContext)

    return (
        
        <div className='main' >
            
        <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        </div>

        <form onSubmit={loginUser}>
            <h3>Login</h3>
            <label for="username">Username</label>
            <input type="text" placeholder="Username" name="username"/>
            <label for="password">Password</label>
            <input type="password" placeholder="Password" name="password"/>
            <button type="submit">Log In</button>

        </form>
        
        </div>
);
}

export default LoginPage