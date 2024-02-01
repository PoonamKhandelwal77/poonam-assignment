import Link from 'next/link'
import React from 'react'


const MenuItem = (props) => {
  return (
    <div className='menuitems' style={{display: 'flex', flexDirection:'row'}}>
        <Link href='#'>
        <props.immg/>
        <span style={{position:'relative',top:'-2px',fontSize:'18px',paddingLeft:'20px'}}>{props.name}</span>
        </Link>

    </div>
  )
}

export default MenuItem