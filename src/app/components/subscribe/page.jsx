


import React from 'react'
import './Subscribe.css'
import {  AiOutlineMail}from 'react-icons/ai' 
import  {  BiLogoTelegram} from 'react-icons/bi'
import Image from 'next/image'
import Su from '../../../../public/s.png'
const Subscribe = () => {
  return (
    <section className="s-wrapper">
        <div className="s-container paddings innerWidth ">
<div className="s-left flexColStart">
 <div className='s-icon flexCenter'>
 <AiOutlineMail size={15} className='primaryText2' />
 <h2 className='primaryText3'>subscribe to Newsletter</h2>
 </div>
<div className="s-bottom flexStart">
    <input type='text' placeholder='Enter Your Text' className='s-input' />
    <input type='text' placeholder='Enter your Email' className='s-input' />
<div className="s-imagecontainer">
 <BiLogoTelegram size={35} className='tele' />
</div>

</div>  
</div>
         <Image src={Su} alt='su' width={400} height={500} className='s-image'/>


        </div>
    </section>
  )
}

export default Subscribe