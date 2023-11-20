'use client'



import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image'
import './Testi.css'
import Tes from    '../../../../public/test.png'
const Testi = () => {
  return (
<section className="t-wrapper">
<div className="t-container flexCenter innerWidth paddings">
<Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}

  spaceBetween={50}
  slidesPerView={1}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  
  pagination= {{ clickable: true }}
  
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
   tes


>
<SwiperSlide>

<div className="t-top flexColCenter">

<h2 className='primaryText'>Testimonials</h2>
<p className='secondaryText3 t' >OK Furniture's product range includes furniture for all areas of the home, including the bedroom, living room, kitchen, dining room, and entertainment area. The company also offers a wide range of appliances, including refrigerators, washing machines, stoves, and dishwashers. OK Furniture is committed to providing its customers with the best possible value for money, and it regularly offers discounts and promotions on its products.
</p>
<div className="t-center flexColCenter">
<Image src={Tes} alt='tes' width={50} />
 <span className='secondaryText'> john alex </span>
  <span className='secondaryText'>ceo co-Founder, tecno </span>
</div>

</div>

</SwiperSlide>
<SwiperSlide>
<div className="t-top flexColCenter">

<h2 className='primaryText'>Testimonials</h2>
<p className='secondaryText3 t' >OK Furniture's product range includes furniture for all areas of the home, including the bedroom, living room, kitchen, dining room, and entertainment area. The company also offers a wide range of appliances, including refrigerators, washing machines, stoves, and dishwashers. OK Furniture is committed to providing its customers with the best possible value for money, and it regularly offers discounts and promotions on its products.
</p>
<div className="t-center flexColCenter">
<Image src={Tes} alt='tes' width={50} />
 <span className='secondaryText'> john alex </span>
  <span className='secondaryText'>ceo co-Founder, tecno </span>
</div>

</div>

</SwiperSlide>

<SwiperSlide>
<div className="t-top flexColCenter">

<h2 className='primaryText'>Testimonials</h2>
<p className='secondaryText3 t' >OK Furniture's product range includes furniture for all areas of the home, including the bedroom, living room, kitchen, dining room, and entertainment area. The company also offers a wide range of appliances, including refrigerators, washing machines, stoves, and dishwashers. OK Furniture is committed to providing its customers with the best possible value for money, and it regularly offers discounts and promotions on its products.
</p>
<div className="t-center flexColCenter">
<Image src={Tes} alt='tes' width={50} />
 <span className='secondaryText'> john alex </span>
  <span className='secondaryText'>ceo co-Founder, tecno </span>
</div>

</div>

</SwiperSlide>




</Swiper>

</div>





</section>
  )
}

export default Testi
