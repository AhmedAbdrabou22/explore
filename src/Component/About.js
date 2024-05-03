import React from 'react'
import MainPhoto from '../images/view.png'
const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row font py-3 justify-contnet-center align-items-center '>
                    <div className='col-lg- col-md-6 col-sm-12'>
                        <div className='aboutUsData'>
                            <p className='aboutUs'>نبذة عنا</p>
                        </div>
                        <p className="titleAbout mb-5">هل لديك الفضول بمعرفتنا؟</p>
                        <span>
                            اكتشف" هو تطبيق سياحي متكامل يهدف إلى تسهيل تجربة السفر للمسافرين عبر توفير معلومات شاملة ومميزات فريدة. يقدم التطبيق قائمة بالأماكن السياحية والعروض في العديد من الوجهات السياحية في جميع أنحاء العالم، مما يسمح للمستخدمين بتخطيط رحلاتهم بسهولة وثقة.

                        </span>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 exploreCity imgMain'>
                        <img src={MainPhoto} alt="photoMain" className='w-75' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About
