import React from 'react'
import ButtonArrow from './tokens/ButtonArrow'
import ProductCard from './tokens/ProductCard'

const NewArrivals = () => {
  return (
    <div className='new-arrivals'>
        <div className='horizontal md:justify-between items-end'>
            <h2 className='md:headline-4 headline-5'>New<br/>Arrivals</h2>
            <ButtonArrow className='!button-s max-md:hidden'>More Products</ButtonArrow>
        </div>
        <div className='horizontal'>
            <ProductCard liked={true} ratings={3} price={199} oldPrice={400} />
        </div>
        <ButtonArrow className='!button-s md:hidden !w-max'>More Products</ButtonArrow>
    </div>
  )
}

export default NewArrivals