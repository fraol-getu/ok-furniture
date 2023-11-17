

'use client'


import React, { useState } from 'react'
import {  BiSolidContact } from 'react-icons/bi'
import  { CiShoppingCart } from 'react-icons/ci'
import Image from 'next/image'
import  Logo from '../../../../public/logo.jpg'
import './Header.css'
import Link from 'next/link'
import {  AiOutlineMenu} from 'react-icons/ai'
import { AiOutlineClose} from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

 
  
  
  
  return (
    <section className="h-wrapper">

    < div className="h-container paddings innerWidth ">
     
      <Image src={Logo} width={50}  />
 <OutsideClickHandler onOutsideClick={() => {setMenuOpen(false)}}>     
 <ul className={menuOpen ? "h-mobile-menu" : "h-menu"}>
      <li className='h-items'>
        <Link href="/">Home</Link>
      </li>
    
      <li className='h-items'>
        <Link href="/shop">Shop</Link>
      </li>
    
      <li className='h-items'>
        <Link href="/about">About</Link>
      </li>
      <li className='h-items'>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
</OutsideClickHandler>
 <div className="h-right flexCenter ">
<h2 className="h1"><BiSolidContact size={25} /></h2>
<h2 className="h1"><CiShoppingCart size={25} /></h2>


 </div>
 <button className='h-icon'
onClick={() => {setMenuOpen(!menuOpen)}}
>
  { menuOpen ?
   ( <AiOutlineClose/>) :
     ( <AiOutlineMenu/>)} 
</button>
    </div>
    

    </section>
  )
}

export default Header