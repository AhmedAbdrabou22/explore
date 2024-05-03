import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import MaskOne from '../images/Maskgroup.png'
import MaskTwo from '../images/Maskgroup2.png'
import MaskThree from '../images/Maskgroup3.png'

const Service = () => {
    return (
        <div className='font service p-4'>
            <h3 className='titleService'>خدمات اكتشف</h3>
            <div className='bottomBorder'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Swiper
            style={{
                padding:"20px"
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
                    <div className='cardService text-center'>
                        <div>
                            <div className='text-center recommend p-4'>
                                <img src={MaskOne} alt="data" />
                            </div>
                            <p id="title" className='fs-5 mb-3'>تنبيهات الأمان والسفر</p>
                            <span>
                            يقدم التطبيق تنبيهات فورية حول أي مشاكل أمنية أو تغييرات في الجدول الزمني للرحلات.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cardService text-center'>
                        <div>
                            <div className='text-center recommend p-4'>
                                <img src={MaskOne} alt="data" />
                            </div>
                            <p id="title" className='fs-5 mb-3'>مرشدين سياحيين افتراضيين</p>
                            <span>
                            يمكن للمستخدمين التواصل مع مرشدين سياحيين افتراضيين للحصول على استشارات ونصائح مباشرة.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cardService text-center'>
                        <div>
                            <div className='text-center recommend p-4'>
                                <img src={MaskTwo} alt="data" />
                            </div>
                            <p id="title" className='fs-5 mb-3'>ميزة التوجيه الصوتي</p>
                            <span>
                            يتيح التطبيق التوجيه الصوتي للمستخدمين أثناء السفر  وجعل الرحله أكثر متعة وسهولة وفرادة.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cardService text-center'>
                        <div>
                            <div className='text-center recommend p-4'>
                                <img src={MaskThree} alt="data" />
                            </div>
                            <h4 className='fs-5 mb-3'>العروض والخصومات</h4>
                            <span>
                                يتيح التطبيق للمستخدمين استعراض العروض والخصومات المقدمة من شركات السياحة والفنادق والمطاعم في تلك الوجهة.
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Service
