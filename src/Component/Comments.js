import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import MaskOne from '../images/aliaa.png'
import MaskTwo from '../images/ayman.png'
import MaskThree from '../images/data.png'

const Comments = () => {
    return (
        <div className='font service comments p-4'>
            <h3 className='titleService titleAbout w-100 text-center commentTitle' style={{ color: "black" }}>ما يقوله المستخدمين </h3>
            <div className='bottomBorder'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Swiper
                style={{
                    padding: "60px"
                }}
                modules={[Navigation, Pagination, A11y]}
                pagination={{ clickable: true }}

                spaceBetween={100}
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
                    <div className='cardComment text-center'>
                        <div className='child' id='first'></div>
                        <div className='child' id='second'>
                            <div className='text-center  p-4'>
                                <img src={MaskOne} alt="data" style={{ marginTop: "-50px" }} />
                            </div>
                            <p id="title" className='fs-5 mb-3'>علياء حسن</p>
                            <span>
                                تطبيق رائع! لقد استخدمته في رحلتي الأخيرة إلى باريس وكانت التجربة مذهلة. تمكنت من العثور على أماكن سياحية رائعة وعروض مذهلة بسهولة. أحببت خاصية التصفية التي سمحت لي بالبحث حسب تفضيلاتي والعثور على الأنشطة التي تناسبني. بالتأكيد سأوصي بهذا التطبيق لأصدقائي!"                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cardComment text-center'>
                        <div className='child' id='first'></div>
                        <div className='child' id='second'>
                            <div className='text-center  p-4'>
                                <img src={MaskTwo} alt="data" style={{ marginTop: "-50px" }} />
                            </div>
                            <p id="title" className='fs-5 mb-3'>علياء حسن</p>
                            <span>
                                تطبيق رائع! لقد استخدمته في رحلتي الأخيرة إلى باريس وكانت التجربة مذهلة. تمكنت من العثور على أماكن سياحية رائعة وعروض مذهلة بسهولة. أحببت خاصية التصفية التي سمحت لي بالبحث حسب تفضيلاتي والعثور على الأنشطة التي تناسبني. بالتأكيد سأوصي بهذا التطبيق لأصدقائي!"                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cardComment text-center'>
                        <div className='child' id='first'></div>
                        <div className='child' id='second'>
                            <div className='text-center  p-4'>
                                <img src={MaskThree} alt="data" style={{ marginTop: "-50px" }} />
                            </div>
                            <p id="title" className='fs-5 mb-3'>علياء حسن</p>
                            <span>
                                تطبيق رائع! لقد استخدمته في رحلتي الأخيرة إلى باريس وكانت التجربة مذهلة. تمكنت من العثور على أماكن سياحية رائعة وعروض مذهلة بسهولة. أحببت خاصية التصفية التي سمحت لي بالبحث حسب تفضيلاتي والعثور على الأنشطة التي تناسبني. بالتأكيد سأوصي بهذا التطبيق لأصدقائي!"                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cardComment text-center'>
                        <div className='child' id='first'></div>
                        <div className='child' id='second'>
                            <div className='text-center  p-4'>
                                <img src={MaskThree} alt="data" style={{ marginTop: "-50px" }} />
                            </div>
                            <p id="title" className='fs-5 mb-3'>علياء حسن</p>
                            <span>
                                تطبيق رائع! لقد استخدمته في رحلتي الأخيرة إلى باريس وكانت التجربة مذهلة. تمكنت من العثور على أماكن سياحية رائعة وعروض مذهلة بسهولة. أحببت خاصية التصفية التي سمحت لي بالبحث حسب تفضيلاتي والعثور على الأنشطة التي تناسبني. بالتأكيد سأوصي بهذا التطبيق لأصدقائي!"                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cardComment text-center'>
                        <div className='child' id='first'></div>
                        <div className='child' id='second'>
                            <div className='text-center  p-4'>
                                <img src={MaskTwo} alt="data" style={{ marginTop: "-50px" }} />
                            </div>
                            <p id="title" className='fs-5 mb-3'>علياء حسن</p>
                            <span>
                                تطبيق رائع! لقد استخدمته في رحلتي الأخيرة إلى باريس وكانت التجربة مذهلة. تمكنت من العثور على أماكن سياحية رائعة وعروض مذهلة بسهولة. أحببت خاصية التصفية التي سمحت لي بالبحث حسب تفضيلاتي والعثور على الأنشطة التي تناسبني. بالتأكيد سأوصي بهذا التطبيق لأصدقائي!"                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='cardComment text-center'>
                        <div className='child' id='first'></div>
                        <div className='child' id='second'>
                            <div className='text-center  p-4'>
                                <img src={MaskOne} alt="data" style={{ marginTop: "-50px" }} />
                            </div>
                            <p id="title" className='fs-5 mb-3'>علياء حسن</p>
                            <span>
                                تطبيق رائع! لقد استخدمته في رحلتي الأخيرة إلى باريس وكانت التجربة مذهلة. تمكنت من العثور على أماكن سياحية رائعة وعروض مذهلة بسهولة. أحببت خاصية التصفية التي سمحت لي بالبحث حسب تفضيلاتي والعثور على الأنشطة التي تناسبني. بالتأكيد سأوصي بهذا التطبيق لأصدقائي!"                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Comments
