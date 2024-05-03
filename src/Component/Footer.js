import React from 'react'
import Logo from "../images/logo.png"
import Store from "../images/GrouStore.png"
import Play from "../images/googlebadge.png"
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer foomnt'>
            <div className='row justify-content-between align-items-center'>
                <div className='col-lg-3 col-md-6 col-sm-12 font'>
                    <img src={Logo} alt="data" />
                    <p className='font'>
                        <span>                    اكتشف" هو تطبيق سياحي متكامل يهدف إلى تسهيل تجربة السفر للمسافرين عبر توفير معلومات شاملة ومميزات فريدة. يقدم التطبيق قائمة بالأماكن السياحية والعروض في العديد من الوجهات السياحية في جميع أنحاء العالم، مما يسمح للمستخدمين بتخطيط رحلاتهم بسهولة وثقة.
                        </span>
                    </p>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12 font'>
                    <p>خريطه الموقع</p>
                    <ul>
                        <li><span href='000'>الرئيسية</span></li>
                        <li><span href='000'>المطاعم</span></li>
                        <li><span href='000'>الفنادق </span></li>
                    </ul>
                </div>


                <div className='col-lg-3 col-md-6 col-sm-12 font'>
                    <p>للتواصل</p>
                    <ul style={{
                        marginRight: "-10px"
                    }}>
                        <li><span href='000'>مساعدة التعليمات
                        </span></li>
                        <li><span href='000'>الاحكام </span></li>
                        <li><span href='000'>الشركات التبعه </span></li>
                    </ul>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 font'>
                    <p>أستكشف التطبيق </p>
                    <img src={Store} alt="store" />
                    <img src={Play} alt="Play" style={{
                        marginRight: "-10px"
                    }} />
                    <div>
                        <FaLinkedin fontSize={"30px"} style={{marginRight:"10px"}}/>
                        <FaXTwitter fontSize={"30px"} style={{marginRight:"10px"}}/>
                        <FaInstagram  fontSize={"30px"} style={{marginRight:"10px"}}/>
                        <FaFacebookSquare fontSize={"30px"} style={{marginRight:"10px"}}/>
                    </div>
                </div>
            </div>
            <hr/>
            <p className='font text-center'> كل الحقوق محفوظه لشركه إكتشف لسنه 2024 &copy;	</p>
        </div>
    )
}

export default Footer
