import React from 'react'
import ButtonArrow from './tokens/ButtonArrow'

const Banner = () => {
  return (
    <section className='banner-section'>
        <div className='image-placeholder'>
            <img src="images/banner-img.png" alt="" />
        </div>
        <div className='content-placeholder'>
            <div className="title">
                <span>SALE UP TO 35% OFF</span>
                <h3>HUNDREDS of<br/>New lower prices!</h3>
                <p>It’s more affordable than ever to give every room in your home a stylish makeover</p>
            </div>
            <ButtonArrow className='button-xs sm:!button-s'>Shop Now</ButtonArrow>
        </div>
    </section>
  )
}

export default Banner