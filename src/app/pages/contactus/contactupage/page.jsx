



import React from 'react'
import './Contactpage.css'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlineMail} from 'react-icons/ai'
import { BsTelephoneFill} from 'react-icons/bs'
const Contactpage = () => {
  return (
    <section className="c-wrapper">
<div className=" paddings innerWidth c-container flexColStart">
   <div className="c-top ">
     <div className=" c-inner">
       <div className="c-innercontainer">
        <MdLocationOn size={20} className='location'/>
        </div> 
       <p className='c-Text'> Addisababa lafto mall 3rd </p>
     </div>

     <div className=" c-inner ai">
       <div className="c-innercontainer ">
        <AiOutlineMail size={20} className='location'/>
        </div> 
       <p className='c-Text'> Info@okfurnitures gmail.com </p>
     </div>
     <div className=" c-inner">
       <div className="c-innercontainer">
        <BsTelephoneFill size={20} className='location'/>
        </div> 
       <p className='c-Text'> phone num +25 19 2869 6488 </p>
     </div>
    </div>   

      <div className="flexColStart c-middle">
      <div className="c-middle-inner flexCenter">
       <div className="c-middle-left flexColStart">
        <p className='c1-Text'>First name</p>
         <input type="text"  className='c-input'/>
       </div>
       <div className="c-middle-left flexColStart">
        <p className='c1-Text'>Last name</p>
         <input type="text" className='c-input'/>
       </div>


      </div>
      <div className="c-middle-left flexColStart">
        <p className='c1-Text'>Email adress</p>
         <input type="text" className='c-input1'/>
       </div>
       <div className="c-middle-left flexColStart">
        <p className='c1-Text'>message</p>
         <input type="text" className='c-input2'/>
       </div>
      
      </div>
        </div>
    </section>
  )
}

export default Contactpage