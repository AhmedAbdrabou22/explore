import React from 'react'
import MainPhoto from '../images/GroubCity.png'
const ExploreCity = () => {
    return (
        <div className='container exploreCity'>
            <div className='row font py-3 justify-contnet-center align-items-center '>
                <div className='col-lg- col-md-6 col-sm-12'>
                    <h3 className='mb-5'>أستكشاف متعدد الوجهات</h3>
                    <span>
                    يمكن للمستخدمين تحديد الوجهة التي يرغبون في زيارتها واستعراض قائمة شاملة بالأماكن السياحية والمعالم السياحية في تلك الوجهة. يمكن للمستخدمين تحديد الوجهة التي يرغبون في زيارتها واستعراض قائمة شاملة بالأماكن السياحية والمعالم السياحية في تلك الوجهة.يمكن للمستخدمين تحديد الوجهة التي يرغبون في زيارتها واستعراض قائمة شاملة بالأماكن السياحية والمعالم السياحية في تلك الوجهة.يمكن للمستخدمين تحديد الوجهة التي يرغبون في زيارتها.
                    </span>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 exploreCity imgMain'>
                    <img src={MainPhoto} alt="photoMain" className='w-75' />
                </div>
            </div>

            
        </div>
    )
}

export default ExploreCity
