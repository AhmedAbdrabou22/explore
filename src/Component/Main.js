import React from 'react'
import MainPhoto from '../images/eploreOne.png'
const Main = () => {
    return (
        <div className='container' >
            <div className='row font py-3 justify-contnet-center align-items-center '>
                <div className='col-lg-6 col-md-6 col-sm-12' style={{lineHeight:"50px"}}>
                    <span>الرحلات معنا</span>
                    <h3 className=''>إكتشف</h3>
                    <p id="info">سهولة حجز رحلاتك من أي مكان وفي أي وقت و بأقل التكاليف.</p>
                    <span>
                        احجز الأن واستمتع بعروض الصيف انت و عائلتك بأقل الاسعار
                    </span>
                    <br/>
                    <button className='btn booking'>أحجز الان</button>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 imgMain'>
                    <img src={MainPhoto} alt="photoMain" className='w-75'/>
                </div>
            </div>
        </div>
    )
}

export default Main
