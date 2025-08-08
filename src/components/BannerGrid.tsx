import React from 'react'
import ButtonArrow from './tokens/ButtonArrow'

const BannerGrid = () => {
  return (
    <div className='banner-grid'>
        <div>
            <img src="images/living-room.png" alt="" />
            <div className='banner-content'>
                <h3>Living Room</h3>
                <ButtonArrow className='!button-s' iconSize={20}>Shop Now</ButtonArrow>
            </div>
        </div>
        <div>
           <div>
              <img src="images/bedroom.png" alt="" />
              <div className='banner-content'>
                <h3>Bedroom</h3>
                <ButtonArrow className='!button-s' iconSize={20}>Shop Now</ButtonArrow>
            </div>
           </div>
           <div>
              <img src="images/kitchen.png" alt="" />
              <div className='banner-content'>
                <h3>Kitchen</h3>
                <ButtonArrow className='!button-s' iconSize={20}>Shop Now</ButtonArrow>
            </div>
           </div>
        </div>
    </div>
  )
}

export default BannerGrid