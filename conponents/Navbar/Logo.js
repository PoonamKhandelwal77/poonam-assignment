import Image from 'next/image'
import React from 'react'
import MyLogo from '@/public/MyLogo.svg'

const Logo = () => {
  return (
    <div style={{display: 'flex', flexDirection:'row'}}>
        <Image src={MyLogo} height={100} width={100} ></Image>
        <span style={{position:'absolute', top:'40px', left: '100px',fontSize:'30px'}}>Base</span>
    </div>
  )
}

export default Logo