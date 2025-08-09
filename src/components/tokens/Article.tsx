import React from 'react'
import ButtonArrow from './ButtonArrow'
type props = {
    title : string;
    image : string;
}
const Article:React.FC<props> = ({ title , image}) => {
  return (
    <div className='article-single'>
        <div className='img-holder'>
            <img src={`images/${image}`} alt="" />
        </div>
        <div className="info">
            <p>{title}</p>
            <ButtonArrow>Read More</ButtonArrow>
        </div>
    </div>
  )
}

export default Article