




import React from 'react'
import './About.css'
import Image from 'next/image'
import {  GrDeliver } from 'react-icons/gr'
import {   HiOutlineSupport } from 'react-icons/hi'
import { HiOutlineArrowPath } from 'react-icons/hi2'
import {  BsBagCheck } from 'react-icons/bs'
import WhyImage   from '../../../../../public/why.jpg'

const Aboutus = () => {
  return (
    <section className="w-wrapper">
    <div className="w-container innerWidth flexCenter paddings">
    <div className="w-left flexColStart">
     <div className="w-top flexColCenter">
<h2 className='primaryText'>About Us</h2>
 <p className='secondaryText'>OK Furniture is a South African furniture retailer with over 100 stores nationwide. <br/>The company was founded in 1985 and has since become one of the leading</p>
</div>
    <div className='w-center flexStart'>
  
    <div className="w-center-left flexColStart">

    <GrDeliver size={25} />
     <h2 className='primaryText2'>fast and free</h2>
     <p className='secondaryText pt'>OK Furniture is a South African furniture retailer with over 100 stores nationwide. The company.</p>


    </div>
    
    <div className="w-center-left flexColStart">

    <BsBagCheck size={25} />
     <h2 primaryText2>Easy for Shop</h2>
     <p className='secondaryText pt'>OK Furniture is a South African furniture retailer with over 100 stores nationwide. The company.</p>


    </div>
    

    </div>
    
    <div className='w-center flexStart'>
  
    <div className="w-center-left flexColStart">

    <HiOutlineSupport size={25} />
     <h2 className='primaryText2'>24/7 support</h2>
     <p className='secondaryText pt'>OK Furniture is a South African furniture retailer with over 100 stores nationwide.The company.</p>


    </div>
    
    <div className="w-center-left flexColStart">

    <HiOutlineArrowPath size={25} />
     <h2>Hassile Benfit</h2>
     <p className='secondaryText pt'>OK Furniture is a South African furniture retailer with over 100 stores nationwide.The company.</p>


    </div>
    
    
    </div>
    </div>

   
   <Image src={WhyImage} alt='why' width={500} height={450} className='w-image' />


    </div>





    </section>
  )
}

export default Aboutus