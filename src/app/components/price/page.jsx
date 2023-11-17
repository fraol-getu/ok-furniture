




import React from 'react'
import './Price.css'


import Image from 'next/image';
import pric from '../../../../public/images/pric.png'
import Price1 from '../../../../public/images/price1.png'
import price2 from '../../../../public/images/price2.png'
import price4 from  '../../../../public/images/price4.png'
import Link from 'next/link';
const Price = () => {
  return (
    <section className='p-wrapper'>
    <div className="p-container paddings innerWidth flexStart">
    <div className='p-left flexColStart'>
       <h2 className='primaryText'>
      Crafted With excellent<br/>Material
      </h2>
      <p className='secondaryText'>OK Furniture is a South African  <br/>retailer with over 100 stores<br/>The company was founded in 1985<br/> has since become one of.
</p>
      
      <button className='btn2'>Explore</button>
      </div>
      <div className='flexColCenter p-center'>
     
     
     <Link href='/shop'> <Image src={pric} alt='price' className='p-image'/></Link>
       <div className="p-inner flexColCenter">
       <h2 className='secondaryText1'>warka Chair</h2>
       <span className='secondaryText1'>$50.00</span>
       </div>
      </div>
      <div className='flexColCenter p-center'>
     <Link href='/shop'> <Image src={Price1} alt='price6' className='p-image'/></Link>
      <div className="p-inner flexColCenter">
       <h2 className='secondaryText1'>zegba sofa</h2>
       <span className='secondaryText1'>$78.00</span>
       </div>
      </div>
      <div className='flexColCenter p-center'>
      <Link href='/shop'><Image src={price2} alt='price' className='p-image'/></Link>
      <div className="p-inner flexColCenter">
       <h2 className='secondaryText1'>tsde sofa</h2>
       <span className='secondaryText1'>$50.00</span>
       </div>
      </div>

     
    </div>
    
    </section>
  )
}

export default Price