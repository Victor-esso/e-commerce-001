import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Pagination , Autoplay, EffectFade , EffectCoverflow} from 'swiper/modules';
import { Icon } from '@iconify/react';

const SliderSection = () => {
  return (
      <div className='slider-section'>
        <div className="slider-container relative">
          <Swiper 
            className='w-full h-full'
            modules={[Navigation , Pagination , Autoplay , EffectFade , EffectCoverflow]}
            navigation={{ prevEl: '.swiper-btn-banner-prev', nextEl: '.swiper-btn-banner-next' }}
            pagination={{ el : '.banner-pagination', clickable: true, enabled : true}}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter : true
            }}
            effect='fade'
            fadeEffect={{
              crossFade: true
            }}
            loop={true} 
          >
            <SwiperSlide><img src="images/banner-img-7.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/banner-img-3.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/banner-img-8.png" alt="" /></SwiperSlide>
          </Swiper>

          <div className='w-max h-max absolute abs-center-y left-8 z-[1] max-sm:hidden'>
            <button className='swiper-btn-banner-prev' aria-label='swiper-left'>
                                <Icon icon="solar:arrow-left-outline" width="32" height="32" />
            </button>
          </div>
          <div className='w-max h-max absolute abs-center-y right-8 z-[1] max-sm:hidden'>
            <button className='swiper-btn-banner-next' aria-label='swiper-left'>
                <Icon icon="solar:arrow-right-outline" width="32" height="32" />
            </button>
          </div>
          <div className='banner-pagination !abs-center-x !bottom-8'></div>

        </div>
        <div className='vertical gap-4 lg:horizontal lg:justify-between'>
          <h1 className='header-text shrink-0'>Simply Unique<span>/</span><br/>Simply Better<span>.</span></h1>
          <p className='w-full lg:max-w-[453px] md:max-w-[60%] body-2 text-natural-4'><span className='body-2-semi text-natural-5'>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
        </div>
      </div>
  )
}

export default SliderSection