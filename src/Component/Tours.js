import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { IoIosSend } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import MaskOne from '../images/masgad.png'
import MaskTwo from '../images/karnak.png'
import MaskThree from '../images/pyramid.png'

const Tours = () => {
    return (
        <div className='font service p-4'>
            <p className='titleService titleAbout w-100 text-center'>الاماكن السياحية المتوفرة في مصر</p>
            <div className='bottomBorder'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Swiper
                style={{
                    padding: "20px"
                }}
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='cardTour'>
                        <div>
                            <img src={MaskOne} alt="data" className='w-100' />
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-3 px-1'>
                            <p>مسجد محمد علي , الاسكندرية</p>
                            <p>800 LE</p>
                        </div>
                        <p><IoIosSend /> رحلة 3 أيام</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='cardTour'>
                        <div>
                            <img src={MaskTwo} alt="data" className='w-100'/>
                        </div>
                        <div className='d-flex justify-content-between align-items-center flex-wrap mt-3 px-1'> 
                            <p>معبد الكرنك, الاقصر</p>
                            <p>1,500 LE</p>
                        </div>
                        <p><IoIosSend /> رحلة 5 أيام</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='cardTour'>
                        <div>
                            <img src={MaskThree} alt="data" className='w-100'/>
                        </div>
                        <div className='d-flex justify-content-between align-items-center flex-wrap mt-3 px-1'> 
                            <p>الاهرامات , الجيزة</p>
                            <p>1,200 LE</p>
                        </div>
                        <p><IoIosSend /> رحلة 10 أيام</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='cardTour'>
                        <div>
                            <img src={MaskThree} alt="data" className='w-100'/>
                        </div>
                        <div className='d-flex justify-content-between align-items-center flex-wrap mt-3 px-1'> 
                            <p>الاهرامات , الجيزة</p>
                            <p>1,200 LE</p>
                        </div>
                        <p><IoIosSend /> رحلة 10 أيام</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Tours
