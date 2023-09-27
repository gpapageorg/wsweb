import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as FiIcons from "react-icons/fi"
import { Link } from "react-router-dom"
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'
import {Grid} from '@mui/material'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='navbar'>
                <Link to='#' className = 'menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <div className='header' >Weather Station</div>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                <Grid container rowspacing={1}>
                    <Grid item sm={8}>
                        <Link to="#" className='menu-bars'>
                            <div style={{position: 'absolute'}}>
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </div>
                        </Link>
                    </Grid>

                    <Grid item sm={4}>
                        <Link to="#" className='menu-bars'>
                            <div style={{marginLeft: 15}}>
                                <FiIcons.FiLogOut />
                            </div>
                        </Link>
                    </Grid>

                    </Grid>
                    
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key ={index} className={item.cName}  onClick={showSidebar}>
                            <Link to = {item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>

  );
}

export default Navbar
