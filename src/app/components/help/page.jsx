






import React from 'react'
import './Help.css'
import {  MdOutlineDangerous } from 'react-icons/md'
import Image from 'next/image'
 import Link from 'next/link'
import HelpImage from '../../../../public/help1.jpg'
const Help = () => {
  return (
    <section className="help-wrapper">

    <div className="help-container flexStart innerWidth paddings">
        <Image src={HelpImage} alt='help' width={500} height={450} className='help-image'/>
        
        <div className='help-right flexColStart'>
     
     <h2 className='primaryText'>We Help You Make<br/> Modern Interior Design</h2>
     <p className='secondaryText'>
     OK Furniture is a South African furniture retailer with over 100 stores nationwide. <br/>The company was founded in 1985 and has since become one of the leading <br/>furniture retailers in the country
 </p>
    
    <div className="help-top flexCenter">
    <div className="help-bottom flexCenter">
      <MdOutlineDangerous className='b-icon' />
         <p className='secondaryText'>OK Furniture is a South African  <br/>The company was founded </p>
    </div>

    <div className="help-bottom flexCenter">
      <MdOutlineDangerous className='b-icon' />
         <p className='secondaryText'>OK Furniture is a South African  <br/>The company was founded </p>
    </div>
    </div>
    
    <div className="help-top flexCenter">
    <div className="help-bottom flexCenter">
      <MdOutlineDangerous className='b-icon' />
         <p className='secondaryText'>OK Furniture is a South African  <br/>The company was founded </p>
    </div>

    <div className="help-bottom flexCenter">
      <MdOutlineDangerous   className='b-icon'/>
         <p className='secondaryText'>OK Furniture is a South African  <br/>The company was founded </p>
    </div>
    </div>
    <Link href="/about"><button className='btn2 w-btn'>Explore</button></Link>
     </div>
    </div>










    </section>
  )
}

export default Help