import React, { useRef, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TOKEN, USER_LOGIN } from '../../util/setting/setting';
import './header.css'
import Navbar from './Navbar/Navbar';

// import { UserOutlined } from '@ant-design/icons'
import style from './header.module.css'
import 'antd/dist/antd.css';
//Dropdown menu

import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import { Select } from 'antd';

import { history } from '../../App';
import { useDispatch } from 'react-redux';
import { DANG_XUAT_TAI_KHOAN_ACTION } from '../../redux/types/QuanLyNguoiDungtype';
// Hook language
import { useTranslation } from 'react-i18next';




function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" key={'1'} onClick={() => { history.push('/register') }}><UserOutlined /> View Profile</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" key={'2'} onClick={() => { history.push('/admin') }}><UserAddOutlined /> Dashboard</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" key={'3'} onClick={() => {
        localStorage.removeItem(USER_LOGIN)
        localStorage.removeItem(TOKEN)
        history.push('/home')
      }}><LogoutOutlined /> Log Out</a>
    </Menu.Item>
  </Menu>
);

export const DropdownMenu = () => (
  <Space wrap>
    <Dropdown overlay={menu}>
      <Button className='ml-1'>
        <Space>
          {JSON.parse(localStorage.getItem(USER_LOGIN)).hoTen}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);
  // Language
  const { Option } = Select;
  
  

export default function Header(props) {
  const { t, i18n } = useTranslation();
  const handleChange = (value) => {
    i18n.changeLanguage(value)
  }
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
      <header ref={headerRef} className=" header-movie dark:bg-coolGray-800 dark:text-coolGray-100 shadow-xl	position: fixed w-full z-10 ">
        <div className="container flex justify-between h-24 mx-auto">
          <a href="#" aria-label="Back to homepage" className="flex items-center ">
            {/* <img src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png" alt="" /> */}
            <img src={stateLogo.logo} alt="" className='w-16 dark:text-violet-400 object-cover' />

          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex mr-0">
            <li className="flex">
              <NavLink to='/home' className="link-item flex text-lg font-bold items-center px-4 -mb-1 dark:border-transparentcolor-pri" activeClassName='border-b-2  border-active'>{t('home')}</NavLink>
            </li>

            <li className="flex">
              <NavLink to='/movies' className="link-item flex text-lg font-bold items-center px-4 -mb-1 dark:border-transparent   " activeClassName='border-b-2  border-active '>{t('movies')}</NavLink>
            </li>

            <li className="flex">
              <NavLink to='/bookingtickets' className="link-item flex text-lg font-bold items-center px-4 -mb-1 dark:border-transparent   " activeClassName='border-b-2  border-active'>{t('bookingticket')}</NavLink>
            </li>

          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {
              localStorage.getItem(TOKEN) ? <div className='flex'>
                <UserOutlined className={`${style.anticon} items-center`} />
                {/* <p className='mt-1 mb-0 pl-1 text-lg'>{JSON.parse(localStorage.getItem(USER_LOGIN)).hoTen}</p> */}
                <DropdownMenu />

              </div> : <>
                <NavLink to='/login' className=" link-item self-center py-3 rounded text-base font-bold uppercase" activeClassName='border-b-2   border-active'>{t('signin')}</NavLink>
                <NavLink to='/register' className="btn first mx-8 font-bold" activeClassName='border-b-2  border-active'>{t('signup')}</NavLink>
                <Select defaultValue="ENG" style={{ width: 80}} onChange={handleChange}>
                  <Option value="en">ENG</Option>
                  <Option value="chi">CHI</Option>
                  <Option value="vi">VI</Option>
                </Select>
              </>
            }


          </div>
          {/* <button className="btnMenu p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}
          <div className=" lg:hidden ">

            <Navbar />
          </div>
        </div>
      </header>


    </div>
  )
}


