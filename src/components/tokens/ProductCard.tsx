import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import StarsRating from './StarRating';
type props = {
    liked?: boolean;
    ratings?: number;
    price?: number;
    oldPrice?: number;
    image? : string;
    name? : string;
}
const ProductCard:React.FC<props> = ({
    liked = false,
    ratings = 0,
    price = 0,
    oldPrice = 0,
    image = "default.svg",
    name = "Default name"

 }) => {
    const [isLiked , setIsLiked ] = useState(liked)
  return (
    <div className='product-card'>
        <div className="top">
            <img src={`images/${image.trim() != '' ? image : 'default.svg'}`} alt="" />
            <div className="badges">
                <span className='new'>New</span>
                <span className='discount'>-50%</span>
            </div>
            <div className="wishlist">
                <button 
                    aria-label='toggle-wishlist' 
                    className={`${isLiked ? 'active' : 'in-active'}`}
                    onClick={() => setIsLiked(!isLiked)}
                >
                    <Icon className='in-active' icon="solar:heart-linear" width="20" height="20" />
                    <Icon className='active' icon="solar:heart-bold" width="22" height="22" />
                </button>
            </div>
            <div className="add-to-cart">
                <button className='btn w-full !button-s'>Add to cart</button>
            </div>
        </div>
        <div className="details">
            <StarsRating rating={ratings} />
            <p>{name}</p>
            <div className="prices">
                <span>${price.toFixed(2)}</span>
                {oldPrice > 0 && <span className='old'>${oldPrice.toFixed(2)}</span>}
                
            </div>
        </div>
    </div>
  )
}

export default ProductCard