import React from 'react';
import Image from 'next/image';
import MyLogo from '@/public/MyLogo.svg'
import { IoNotifications } from "react-icons/io5";

const TopNav = (props) => {
  return (
    <div style={{ display:'flex',flexDirection:'row',padding:'20px', gap:'20px'}}>
        <h2>{props.uname}</h2>
       <div style={{position:'relative',left:'850px',top:'20px'}}>

        <IoNotifications fontSize='20px' />
       </div>
        <div style={{position:'relative',left:'850px',top:'15px',padding:'0px'}}>
            <Image src={MyLogo} height={30} width={30} style={{borderRadius:'50px'}}></Image>
            
        </div>
    </div>
  )
}

export default TopNav