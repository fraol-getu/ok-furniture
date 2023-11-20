




import React from 'react'
import './Shop.css'
import Image from 'next/image'
import A1 from '../../../../../public/arrival/a1.jpg'
import A2 from '../../../../../public/arrival/a2.jpg'
import A3 from '../../../../../public/arrival/a3.jpg'
import A4 from '../../../../../public/arrival/a4.jpg'
import A5 from '../../../../../public/arrival/a5.jpg'
import A6 from '../../../../../public/arrival/a6.jpg'
import A7 from '../../../../../public/arrival/a7.jpg'
import A8 from '../../../../../public/arrival/a8.jpg'



const Shopproduct = () => {
  return (
    <section className="shop-wrapper">
<div className="shop-container flexColStart  paddings">
<h2 className='primaryText'>Latest Products</h2>
<div className="flexColStart shop-display">
<div className="flexStart shop-products">
<div className='flexColCenter a-center'>  
         <Image src={A1} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'>salon sofa</span>
          <span className='secondaryText1'>$80</span>
          </div>
          
          <div className='flexColCenter a-center'>  
         <Image src={A3} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'>cafe sofa</span>
          <span className='secondaryText1'>$80</span>
          </div>
          <div className='flexColCenter a-center'>  
         <Image src={A4} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'>wow chair</span>
          <span className='secondaryText1'>$80</span>
          </div>
          <div className='flexColCenter a-center'>  
         <Image src={A2} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'>cafe sofa</span>
          <span className='secondaryText1'>$80</span>
          </div>
          </div>
          <div className="flexStart shop-products">
<div className='flexColCenter a-center'>  
         <Image src={A5} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'> ampole</span>
          <span className='secondaryText1'>$80</span>
          </div>
          
          <div className='flexColCenter a-center'>  
         <Image src={A6} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'>tv stand</span>
          <span className='secondaryText1'>$80</span>
          </div>
          <div className='flexColCenter a-center'>  
         <Image src={A7} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'>arif chair</span>
          <span className='secondaryText1'>$80</span>
          </div>
          <div className='flexColCenter a-center'>  
         <Image src={A8} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'>arif sofa</span>
          <span className='secondaryText1'>$80</span>
          </div>
          </div>
          <div className="flexStart shop-products">
<div className='flexColCenter a-center'>  
         <Image src={A1} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'>salon sofa</span>
          <span className='secondaryText1'>$80</span>
          </div>
          
          <div className='flexColCenter a-center'>  
         <Image src={A3} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'>cafe sofa</span>
          <span className='secondaryText1'>$80</span>
          </div>
          <div className='flexColCenter a-center'>  
         <Image src={A4} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'>wow chair</span>
          <span className='secondaryText1'>$80</span>
          </div>
          <div className='flexColCenter a-center'>  
         <Image src={A2} alt='sofa' width={320} height={300}/>
         <span className='secondaryText1'>biro sofa</span>
          <span className='secondaryText1'>$80</span>
          </div>
          </div>
          </div>

</div>


    </section>
  )
}

export default Shopproduct