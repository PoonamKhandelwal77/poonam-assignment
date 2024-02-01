import React from 'react'
import Nav from '@/conponents/Navbar/Nav'
import TopNav from '@/conponents/Navbar/TopNav'
import { RiFileExcel2Fill } from "react-icons/ri";
import Link from 'next/link';

const upload = () => {
  
  return (
    <div>
      <div className='Main-Container'>
        <div className='sideNav'>
          <Nav />
        </div>
        <div className='r-MainContainer'>
          <div className='topNav'>
            <TopNav uname='Upload' />
          </div>
          <div className='uploadBox'>
            <div className='uBorder'>

              <div className='uBox'>
                <RiFileExcel2Fill color='green' fontSize='40px' /><br />
                <p>Drop your Excel sheet here or <input type='file' onChange={(e)=>e.target.value} /></p>
              </div>
            </div>
            <button >Upload</button>
          </div>
          <div className='contentTable'>

          </div>
        </div>
      </div>

    </div>
  )
}

export default upload

