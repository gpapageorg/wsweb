import React from "react";
// import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BiIcons from "react-icons/bi"
import * as GoIcons from "react-icons/go"


export const SidebarData = [
    {
        title: 'Overview',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'  
    },
    {
        title: 'Patras',
        path: '/patras',
        icon: <BiIcons.BiStation />,
        cName: 'nav-text'  
    },
    {
        title: 'Ioannina',
        path: '/ioannina',
        icon: <BiIcons.BiStation  />,
        cName: 'nav-text'  
    },
    {
        title: 'Fortosi',
        path: '/fortosi',
        icon: <BiIcons.BiStation  />,
        cName: 'nav-text'  
    },
   {
    title: 'Graphs',
    path: '/graphs',
    icon: <GoIcons.GoGraph />,
    cName: 'nav-text'  
},

]