import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Style/Slider.scss';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
        //   reverseDirection: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='img-background img_1'>
                <div className='img-content'>
                    <div className='side-1'>
                        <span> Chair <br/> Collection <br/> 2022 </span>
                        <p> Wellcome to <br/> our Online store </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse dicta perspiciatis aperiam,
                            aspernatur quasi quos. Culpa quam quis accusantium, dicta nobis laboriosam earum,
                            deleniti explicabo sint eveniet placeat expedita!
                        </p>
                        <a href='/' className='shopeNow-btn' > Shope Now <i className='fas fa-arrow-right'/> </a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='img-background img_2'>
                <div className='img-content'>
                    <div className='side-1'>
                        <span> Chair <br/> Collection <br/> 2022 </span>
                        <p> Wellcome to <br/> our Online store </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse dicta perspiciatis aperiam,
                            aspernatur quasi quos. Culpa quam quis accusantium, dicta nobis laboriosam earum,
                            deleniti explicabo sint eveniet placeat expedita!
                        </p>
                        <a href='/' className='shopeNow-btn' > Shope Now <i className='fas fa-arrow-right'/> </a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='img-background img_3'>
                <div className='img-content'>
                    <div className='side-1'>
                        <span> Chair <br/> Collection <br/> 2022 </span>
                        <p> Wellcome to <br/> our Online store </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse dicta perspiciatis aperiam,
                            aspernatur quasi quos. Culpa quam quis accusantium, dicta nobis laboriosam earum,
                            deleniti explicabo sint eveniet placeat expedita!
                        </p>
                        <a href='/' className='shopeNow-btn' > Shope Now <i className='fas fa-arrow-right'/> </a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    
  )
}
