import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { GiTicket } from "react-icons/gi";
export const SidebarData = [
  {
    title: 'Home',
    href: '#',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Movies',
    href: '#moviesSection',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Bookingtickets',
    href: '#rapSection',
    icon: <GiTicket />,
    cName: 'nav-text'
  },


];