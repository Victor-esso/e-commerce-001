import React from 'react'
import { Icon } from "@iconify/react"
import ButtonArrow from './tokens/ButtonArrow'


const NotificationBar = () => {
  return (
    <div className='bg-natural-2 flex-center h-9 md:h-10 gap-[22px] relative'>
        <div className='horizontal gap-3'>
            <Icon className='text-[#343839] md:text-2xl text-xl' icon="hugeicons:coupon-percent" />
            <span className='caption-2-semi md:caption-1-semi text-[#343839]'>30% off storewide — Limited time!</span>
            <ButtonArrow className='!border-cus-blue !text-cus-blue max-lg:hidden !duration-300'>Shop Now</ButtonArrow>
        </div>
        
        <div className='absolute right-4'>
          <div className='aspect-square w-6 grid-center rounded-xl cursor-pointer transition-all ghost-hover-full'>
              <Icon className='text-natural-5' icon="hugeicons:cancel-01" width="20" height="20" />
          </div>
        </div>
    </div>
  )
}

export default NotificationBar