import React, { useRef, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
export default function Header(props) {
  const headerRef = useRef(null);
  const [stateLogo, setStateLogo] = useState({
    logo: './Images/logo-01.png'
  })
  const { logo } = stateLogo;
  useEffect(() => {
    let shrinkHeader = () => {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        setStateLogo({ logo: './Images/logo-02-01.png' });
        headerRef.current.classList.add('shrink');
      } else {
        setStateLogo({ logo: './Images/logo-01.png' });
        headerRef.current.classList.remove('shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    }
  }, []);

  return (
    <div>
      <header ref={headerRef} className=" header-movie p-4 dark:bg-coolGray-800 dark:text-coolGray-100 shadow-xl	position: fixed w-full z-10 ">
        <div className="container flex justify-between h-16 mx-auto">
          <a href="#" aria-label="Back to homepage" className="flex items-center p-2">
            {/* <img src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png" alt="" /> */}
            <img src={stateLogo.logo} alt="" className='w-16  dark:text-violet-400 object-cover' />

          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink to='/home' className="link-item flex text-lg font-bold items-center px-4 -mb-1 dark:border-transparent   color-pri" activeClassName='border-b-2  border-active'>Home</NavLink>
            </li>

            <li className="flex">
              <NavLink to='/movies' className="link-item flex text-lg font-bold items-center px-4 -mb-1 dark:border-transparent   " activeClassName='border-b-2  border-active '>Movies</NavLink>
            </li>

            <li className="flex">
              <NavLink to='/bookingtickets' className="link-item flex text-lg font-bold items-center px-4 -mb-1 dark:border-transparent   " activeClassName='border-b-2  border-active'>Booking Ticket</NavLink>
            </li>

          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <NavLink to='/login' className=" link-item self-center px-8 py-3 rounded text-base font-bold" activeClassName='border-b-2   border-active'>Sign in</NavLink>
            <NavLink to='/register' className="btn first" activeClassName='border-b-2   border-active'>Sign up</NavLink>

          </div>
          <button className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>


    </div>
  )
}
