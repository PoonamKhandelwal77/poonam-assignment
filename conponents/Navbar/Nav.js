
import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdTextSnippet } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaSquarePollVertical } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { IoCalendarSharp } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";

import Logo from './Logo';
import MenuItem from './MenuItem';

const Nav = () => {
    return (
        
            <div className='sidebar'>
                <Logo />
                <MenuItem immg={MdDashboard} name='Dashboard' />
                <MenuItem immg={FaSquarePollVertical} name='Upload' />
                <MenuItem immg={FaFileInvoice} name='Invoice' />
                <MenuItem immg={MdTextSnippet} name='Schedule' />
                <MenuItem immg={IoCalendarSharp} name='Calender' />
                <MenuItem immg={IoNotifications} name='Notifications' />
                <MenuItem immg={IoSettings} name='Settings' />

            </div>
   
    )
}

export default Nav