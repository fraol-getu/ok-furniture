

"use client"
import React from 'react'
import './Abouthero.css'
import Image from 'next/image'
import BackroundImage from '../../../../../public/help.jpg'


import { useRouter } from 'next/router'
const Abouthero = () => {
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
      <h1 className='sh1'>About</h1>
      <h2 className='sp'>Us</h2>
       
       </div>
     </div>
    
    
    


  )
}

export default Abouthero