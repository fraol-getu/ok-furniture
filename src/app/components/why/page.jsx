




import React from 'react'
import './Why.css'
import Image from 'next/image'
import {  GrDeliver } from 'react-icons/gr'
import {   HiOutlineSupport } from 'react-icons/hi'
import { HiOutlineArrowPath } from 'react-icons/hi2'
import {  BsBagCheck } from 'react-icons/bs'
import WhyImage   from '../../../../public/why.jpg'

const Why = () => {
  return (
    <section className="w-wrapper">
    <div className="w-container innerWidth flexCenter paddings">
    <div className="w-left flexColStart">
     <div className="w-top flexColStart">
<h2 className='primaryText0'>why choose us</h2>
 <p className='secondaryText w-t'>OK Furniture is a South African furniture retailer with over 100 stores nationwide. The company was founded in 1985 and has since become one of the leading</p>
</div>
    <div className='w-center flexStart'>
  
    <div className="w-center-left  flexColStart">

    <GrDeliver size={25}  className='w-icon'/>
     <h2 className='primaryText2'>fast and free</h2>
     <p className='secondaryText pt'>OK Furniture is a South African furniture retailer with over 100 stores nationwide. The company.</p>


    </div>
    
    <div className="w-center-left flexColStart">

    <BsBagCheck size={25} className='w-icon'/>
     <h2 className='primaryText2'>Easy   For   Shop</h2>
     <p className='secondaryText  pt'>OK Furniture is a South African furniture retailer with over 100 stores nationwide. The company.</p>



    </div>
    

    </div>
    
    <div className='w-center flexStart'>
  
    <div className="w-center-left w-max flexColStart">

    <HiOutlineSupport size={25} className='w-icon'/>
     <h2 className='primaryText2' >24/7 support</h2>
     <p className='secondaryText pt'>OK Furniture is a South African furniture retailer with over 100 stores nationwide.The company.</p>


    </div>
    
    <div className="w-center-left flexColStart">

    <HiOutlineArrowPath size={25} className='w-icon'/>
     <h2 className='primaryText2'>Hassile Benfit</h2>
     <p className='secondaryText pt'>OK Furniture is a South African furniture retailer with over 100 stores nationwide.The company.</p>


    </div>
    
    
    </div>
    </div>

   
   <Image src={WhyImage} alt='why' width={500} height={450}  className='w-image' />


    </div>





    </section>
  )
}

export default Why