import React from 'react'
import Recommend from '../images/recommend.png'
import Discount from '../images/discount.png'
import Electronic from '../images/electronic-ticket.png'
import File from '../images/file.png'
const Advantage = () => {
    return (
        <div className='font text-center advantage container'>
            <h3>مميزات اكتشف</h3>
            <div className='bottomBorder adv' style={{
                marginTop:"50px"
            }}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
                    <div>
                        <div className='text-center recommend'>
                            <img src={Recommend} alt="data" />
                        </div>
                        <h4 className='fs-5 mb-3'>توصيات شخصية</h4>
                        <span>
                            يقدم التطبيق توصيات شخصية للأماكن السياحية استنادًا إلى اهتمامات المستخدم وتاريخ تصفحه السابق.
                        </span>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
                    <div>
                        <div className='text-center recommend second'>
                            <img src={Discount} alt="data" />
                        </div>
                        <h4 className='fs-5 mb-3'>العروض والخصومات</h4>
                        <span>
                            يتيح التطبيق للمستخدمين استعراض العروض والخصومات المقدمة من شركات السياحة والفنادق والمطاعم في تلك الوجهة.
                        </span>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
                    <div>
                        <div className='text-center recommend'>
                            <img src={Electronic} alt="data" />
                        </div>
                        <h4 className='fs-5 mb-3'>حجوزات مباشرة</h4>
                        <span>
                            يمكن للمستخدمين حجز الفنادق والتذاكر والجولات مباشرة من التطبيق
                        </span>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
                    <div>
                        <div className='text-center recommend third'>
                            <img src={File} alt="data" />
                        </div>
                        <h4 className='fs-5 mb-3'>تفاصيل مفصلة</h4>
                        <span>
                            يقدم التطبيق معلومات شاملة عن كل مكان سياحي، بما في ذلك التاريخ، والأنشطة المتاحة، والأوقات، والتكاليف.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantage
