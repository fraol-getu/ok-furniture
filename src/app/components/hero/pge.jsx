



"use client"

import React from 'react'
import './Hero.css'
import HeroImage from '../../../../public/hero-image.png'
 import Link from 'next/link'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className="hero-wrapper">
    <div className="hero-container innerWidth paddings flexStart">
    <div className="hero-left  flexColStart">
        <h1 className='h1'>Modern Interior<br/>Design Studio</h1>
        <p className='p'>
OK Furniture is a South African furniture retailer with over 100 stores nationwide. The company was founded in 1985 and has since
</p>
    <div className='hero-btn'>
   <Link href="/shop"> <button className='btn'>shop now</button></Link>
   <Link href="/about"> <button  className='btn1'>Explore</button></Link>
     </div>
    </div>
    <div className='flexCenter'> 


<Image src={HeroImage} alt='hero-image' className='hero-image' />

</div>

    </div>






    </section>
  )
}

export default Hero