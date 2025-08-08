import React from 'react'
import { Icon } from "@iconify/react"


const NotificationBar = () => {
  return (
    <div className='bg-natural-2 flex-center h-9 md:h-10 gap-[22px] relative'>
        <div className='horizontal gap-3'>
            <Icon className='text-[#343839] md:text-2xl text-xl' icon="hugeicons:coupon-percent" />
            <span className='caption-2-semi md:caption-1-semi text-[#343839]'>30% off storewide — Limited time!</span>
            <button className='lg:horizontal gap-1 button-xs border-b border-cus-blue text-cus-blue hidden'>Shop Now <Icon icon="solar:arrow-right-linear" width="18" /></button>
        </div>
        
        <div className='aspect-square hover:bg-black/[.05] w-8 grid-center rounded-xl cursor-pointer transition-all absolute right-4'>
            <Icon className='text-natural-5' icon="hugeicons:cancel-01" width="20" height="20" />
        </div>
    </div>
  )
}

export default NotificationBar