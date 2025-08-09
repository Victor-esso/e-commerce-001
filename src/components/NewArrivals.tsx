import React, { useRef } from 'react'
import ButtonArrow from './tokens/ButtonArrow'
import ProductCard from './tokens/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Icon } from '@iconify/react';
import { Navigation , Pagination } from 'swiper/modules';
import newArrivalsData from '@data/newArrivals';
const NewArrivals = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  return (
    <div className='new-arrivals'>
        <div className='horizontal justify-between items-end'>
            <h2 className='md:headline-4 headline-5'>New<br/>Arrivals</h2>
            <div className='horizontal gap-6'>
                <button className='swiper-btn-prev' aria-label='swiper-left'>
                    <Icon icon="solar:arrow-left-outline" width="32" height="32" />
                </button>
                <button className='swiper-btn-next' aria-label='swiper-left'>
                    <Icon icon="solar:arrow-right-outline" width="32" height="32" />
                </button>
            </div>
            <ButtonArrow className='!button-s max-md:hidden'>More Products</ButtonArrow>
        </div>
        <div>
            <Swiper
                className='swiper-auto no-select '
                modules={[Navigation , Pagination]}
                spaceBetween={16}
                centeredSlides={true}
                breakpoints={{
                    1024: { // lg screens (≥1024px)
                        spaceBetween: 24,
                        centeredSlides: false,
                        
                    }
                }}
                slidesPerView="auto"
                navigation={{ prevEl: '.swiper-btn-prev', nextEl: '.swiper-btn-next' }}
                pagination={{ el : '.arrival-pagination', clickable: true, enabled : true}}
                onSwiper={(swiper) =>{
                    swiperRef.current = swiper
                }}
                
            >
                {newArrivalsData.map((data, i) =>(
                    <SwiperSlide key={i}>
                        <ProductCard liked={data.liked} ratings={data.ratings} price={data.price} oldPrice={data.oldPrice} name={data.name} image={data.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <div className='grid-center w-full max-sm:hidden'><div className='arrival-pagination app-pagination'></div></div>
        <ButtonArrow className='!button-s md:hidden !w-max mx-auto'>More Products</ButtonArrow>
    </div>
  )
}

export default NewArrivals