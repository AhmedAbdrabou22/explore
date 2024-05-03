import React from 'react'
import AppStore from '../images/GrouStore.png'
import GooglePlay from '../images/googlebadge.png'
import Favourite from '../images/favorite.png'
import Like from '../images/like.png'
const Download = () => {
    return (
        <div className='font download'>
            <p>حمل الان التطبيق واستمتع بتكلفة رحلات ارخص واوفر لك ولعائلتك </p>
            <div>
                <img src={AppStore} alt="data"/>
                <img src={GooglePlay} alt="data"/>
            </div>

            <div>
                <img className='fav' src={Favourite} alt="data"/>
            </div>
            <div className='likeDiv'>
                <img className='like' src={Like} alt="data"/>
            </div>
        </div>
    )
}

export default Download
