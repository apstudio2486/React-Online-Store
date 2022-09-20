import React from 'react';
import Slideitem from './Slideitem';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Style/ItemSlide.scss';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img_1 from './Image/300x300 (1).jpg'
import img_2 from './Image/300x300 (2).jpg'
import img_3 from './Image/300x300 (3).jpg'
import img_4 from './Image/300x300 (4).jpg'
import img_5 from './Image/300x300 (5).jpg'


// import required modules
import {Autoplay, Mousewheel, Keyboard} from "swiper";

export default function ItemSlide() {
  return (
    <div className='item-slide container '>

        <span className='prod-slide-title'>Best Selling</span>
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
                clickable: true,
                Mousewheel:true,
            }}
            keyboard={true}
            modules={[Autoplay,Mousewheel, Keyboard]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Slideitem 
                    pro_img = {img_1}
                    pro_name = 'Animi Dolor Pariatur'
                    pro_prize = '$ 10'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slideitem 
                    pro_img = {img_2}
                    pro_name = 'Art Deco Home'
                    pro_prize = '$ 30'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slideitem 
                    pro_img = {img_3}
                    pro_name = 'Artificial potted plant'
                    pro_prize = '$ 40'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slideitem 
                    pro_img = {img_4}
                    pro_name = 'Dark Green Jug'
                    pro_prize = '$ 19.00 - $17'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slideitem 
                    pro_img = {img_5}
                    pro_name = 'Drinking Glasses'
                    pro_prize = '$ 21'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slideitem 
                    pro_img = {img_2}
                    pro_name = 'Animi Dolor Pariatur'
                    pro_prize = '$ 10'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slideitem 
                    pro_img = {img_3}
                    pro_name = 'Animi Dolor Pariatur'
                    pro_prize = '$ 10'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slideitem 
                    pro_img = {img_4}
                    pro_name = 'Animi Dolor Pariatur'
                    pro_prize = '$ 10'
                />
            </SwiperSlide>
            
            
        </Swiper>
    </div>
  )
}
