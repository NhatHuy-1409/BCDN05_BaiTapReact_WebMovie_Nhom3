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
      <NavLink 
        to='#'
        className='menu-bars'
        onClick={showSidebar}
      >
        <faIcons.FaBars/>
      </NavLink>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='nav-menu-toggle'>
          <NavLink to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose/>
          </NavLink>
        </li>
        {SidebarData.map((item, index) =>{
          return (
            <li key={index} className={item.cName}>
              <NavLink to={item.path}> 
                {item.icon}
                <span className='mr-4'>{item.title}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
    </>
  )
}
