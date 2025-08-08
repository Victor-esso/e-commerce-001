import React from 'react'
import ButtonArrow from './tokens/ButtonArrow'

const NewArrivals = () => {
  return (
    <div className='new-arrivals'>
        <div className='horizontal justify-between items-end'>
            <h2 className='md:headline-4 headline-5'>New<br/>Arrivals</h2>
            <ButtonArrow className='!button-s'>More Products</ButtonArrow>
        </div>
    </div>
  )
}

export default NewArrivals