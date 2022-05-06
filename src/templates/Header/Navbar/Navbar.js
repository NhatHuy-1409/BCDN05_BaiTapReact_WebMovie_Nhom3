import React, { useState }from 'react'
import * as faIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData';

import './navbar.css'

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    
    <div className='navbar '>
      <a 
        
        className='menu-bars'
        onClick={showSidebar}
      >
        <faIcons.FaBars/>
      </a>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='nav-menu-toggle'>
          <a className='menu-bars'>
            <AiIcons.AiOutlineClose/>
          </a>
        </li>
        {SidebarData.map((item, index) =>{
          return (
            <li key={index} className={item.cName}>
              <a href={item.href}> 
                {item.icon}
                <span className='mr-4'>{item.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
    </>
  )
}
