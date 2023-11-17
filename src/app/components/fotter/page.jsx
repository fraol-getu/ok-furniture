


import React from 'react'
  import './Fotter.css'
  import {  FaFacebook } from 'react-icons/fa6'
  import {   FaSquareTwitter } from 'react-icons/fa6'
  import {   AiOutlineInstagram } from 'react-icons/ai'
  import {   AiFillYoutube } from 'react-icons/ai'
  import {   BsTelephone } from 'react-icons/bs'
  import {  AiOutlineMail  } from 'react-icons/ai'
  import {   BiCameraHome } from 'react-icons/bi'
  import {   PiBrowserThin } from 'react-icons/pi'
  import {   MdAccountCircle } from 'react-icons/md'
  import {    HiMiniDocumentChartBar } from 'react-icons/hi2'
  import {    AiOutlineExport } from 'react-icons/ai'
  import {     HiSupport } from 'react-icons/hi'
  
  const Fotter = () => {
  return (
    <section className="f-wrapper">
    <div className="f-container paddings ">
    <div className="f-left flexColStart">
        <h2 className='primaryText1'>Furniture</h2>
        <p className='p'>OK Furniture is a South African furniture retailer with over 100 stores nationwide. <br/>The company was founded in 1985 and has since become one of the leading <br/>furniture retailers in the country
</p>
    
    <div className="f-icons flexCenter">
     <h2 className='primaryText1'><FaFacebook size={20}/></h2>
     <h2 className='primaryText1'> <FaSquareTwitter size={20}/></h2>
     <h2 className='primaryText1'><AiOutlineInstagram size={20}/></h2>
     <h2 className='primaryText1'><AiFillYoutube size={20} /></h2>
    </div>
    </div>
    <div className="f-center flexColStart">
    <h2 className='primaryText1'>contact</h2>
    <div className='f-center-icon flexCenter'>
    <h2 className='primaryText1'><BsTelephone size={20}/></h2>
    <p className='p'>+2519 28696488</p>
    </div>
    <div className='f-center-icon flexCenter'>
    <h2 className='primaryText1'><AiOutlineMail size={20}/></h2>
    <p className='p'>frraolgetu03@gmail.com</p>
    </div>
    <div className='f-center-icon flexCenter' >
    <h2 className='primaryText1'><BiCameraHome size={20}/></h2>
    <p className='p'>adress around karakore</p>
    </div>
    <div className='f-center-icon flexCenter' >
    <h2 className='primaryText1'><PiBrowserThin size={20}/></h2>
    <p className='p'>www.furniture.com</p>
    </div>
    </div>
    <div className="f-center flexColStart">
    <h2 className='primaryText1'>profile</h2>
    <div className='f-center-icon flexCenter'>
    <h2 className='primaryText1'><MdAccountCircle size={20}/></h2>
    <p className='p'>my Account</p>
    </div>
    <div className='f-center-icon flexCenter'>
    <h2 className='primaryText1'><HiMiniDocumentChartBar size={20}/></h2>
    <p className='p'>charcter</p>
    </div>
    <div className='f-center-icon flexCenter' >
    <h2 className='primaryText1'><AiOutlineExport size={20}/></h2>
    <p className='p'>portfolio</p>
    </div>
    <div className='f-center-icon flexCenter' >
    <h2 className='primaryText1'><HiSupport size={20}/></h2>
    <p className='p'>Help and Support</p>
    </div>
    </div>
    
    <div className=" f-end flexColStart">
    <h2 className='primaryText1'>NewsLetter</h2>
    <p className='p ok'>ok furniture is the good</p>
    
    <p className='p f-p'>the legend</p>
    
    
     <p className='p'>© 2023 furniture.com</p>
    </div>
    
    
    </div>
    




    </section>
  )
}

export default Fotter



