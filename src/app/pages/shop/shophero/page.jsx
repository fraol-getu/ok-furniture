

"use client"
import React from 'react'
import './Pagehero.css'
import Image from 'next/image'
import BackroundImage from '../../../../../public/help.jpg'


import { useRouter } from 'next/router'
const Shophero = () => {
  return (
    
     <div className="ph-container paddings" 
     style={{
      backgroundImage: `url(${BackroundImage.src})`,
       backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width:"100%",
         height:"100vh",
          display: "flex",
         alignItems: "center",
         justifyContent: "center"
        }}
     
     >
      <div className='s-text flexColCenter'>
      <h1 className='sh1'>Shop</h1>
       <div className='sp-container'>
       <h2 className='shop'> Products</h2>
       </div>
       </div>
     </div>
    
    
    


  )
}

export default Shophero