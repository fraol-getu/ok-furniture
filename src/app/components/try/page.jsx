
'use client'

import React from 'react'
import './Arrival.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import A1 from '../../../../public/arrival/a1.jpg'
import A2 from '../../../../public/arrival/a2.jpg'
import A3 from '../../../../public/arrival/a3.jpg'
import A4 from '../../../../public/arrival/a4.jpg'
import A5 from '../../../../public/arrival/a5.jpg'
import A6 from '../../../../public/arrival/a6.jpg'
import A7 from '../../../../public/arrival/a7.jpg'
import A8 from '../../../../public/arrival/a8.jpg'
const Arrival = () => {
  return (
    <section className="a-wrapper">
    <div className='a-container paddings '>
    <div className='a-top'><h2 className='primaryText'>New Arrival</h2>
    </div>
    <Swiper
    modules={[ Navigation, Pagination, Scrollbar, A11y]}
    // spaceBetween={50}
    // slidesPerView={3}
   breakpoints={{
   
   0:{
    slidesPerView: 1,
     spaceBetween: 10,
  
  },

  480: {
  slidesPerView: 1,
  spaceBetween: 10,
},

868: {
slidesPerView: 3,
spaceBetween: 70,
}

}}
navigation
    pagination={{ clickable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
    <div className='flexColCenter a-center'>  
         <Image src={A1} alt='alon sofa' width={350} height={200}/>
         
         <span className='secondaryText1'>salon sofa</span>
          <span className='secondaryText1'>$80</span>
          </div>
</SwiperSlide>
<SwiperSlide>
<div className='flexColCenter a-center'>  
         <Image src={A2} alt='biro sofa' width={350} height={200}/>
         
         <span className='secondaryText1'>biro sofa</span>
          <span className='secondaryText1'>$80</span>
          </div>
</SwiperSlide>
<SwiperSlide>
<div className='flexColCenter a-center'>  
         <Image src={A3} alt='cafe sofa' width={350} height={200}/>
         
         <span className='secondaryText1'>cafe sofa</span>
          <span className='secondaryText1'>$80</span>
          </div>
</SwiperSlide>
<SwiperSlide>
<div className='flexColCenter a-center'>  
         <Image src={A4} alt='dinner chair' width={350} height={200}/>
         
         <span className='secondaryText1'>dinner chair</span>
          <span className='secondaryText1'>$80</span>
          </div>
</SwiperSlide>
  
<SwiperSlide>
    <div className='flexColCenter a-center'>  
         <Image src={A5} alt='bed ampole' width={350} height={200}/>
         
         <span className='secondaryText1'>bed ampole</span>
          <span className='secondaryText1'>$80</span>
          </div>
</SwiperSlide>
<SwiperSlide>
<div className='flexColCenter a-center'>  
         <Image src={A6} alt='tv stand' width={350} height={200}/>
         
         <span className='secondaryText1'>tv stand</span>
          <span className='secondaryText1'>$80</span>
          </div>
</SwiperSlide>
<SwiperSlide>
<div className='flexColCenter a-center'>  
         <Image src={A7} alt='salon chair' width={350} height={200}/>
         
         <span className='secondaryText1'>salon chair</span>
          <span className='secondaryText1'>$80</span>
          </div>
</SwiperSlide>
<SwiperSlide>
<div className='flexColCenter a-center'>  
         <Image src={A8} alt='sentetic sofa' width={350} height={200}/>
         
         <span className='secondaryText1'>sentetic sofa</span>
          <span className='secondaryText1'>$80</span>
          </div>
</SwiperSlide>
  
  
  </Swiper>
  </div>
  </section>
  )
}

export default Arrival