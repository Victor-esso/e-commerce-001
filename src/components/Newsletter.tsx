import React from 'react'
import { Icon } from '@iconify/react';

const Newsletter = () => {
  return (
    <div className='w-full stack max-w-[1519px] mx-auto'>
        <div className='relative'>
            <img src="images/newsletter-img.png" className='w-full h-full object-cover absolute inset-0' alt="" />
        </div>
        <div className='grid-center py-[95px] relative'>
            <div className='w-full max-w-[488px] *:w-full vertical gap-8 px-8'>
                <div className='vertical *:w-full text-center gap-2'>
                    <h3 className='headline-6 sm:headline-4'>Join Our Newsletter</h3>
                    <p className='text-sm sm:text-lg'>Sign up for deals, new products and promotions</p>
                </div>
                <div className='w-full horizontal  border-b border-natural-4/50 has-[input:focus]:border-natural-7'>
                    <label htmlFor="news" className='horizontal gap-2 h-[52px] w-full'>
                        <Icon icon="hugeicons:mail-02" width="24" height="24" />
                        <input type="text" id='news' placeholder='Email Address' className='focus-within:outline-none w-full bg-transparent placeholder:text-natural-4 text-natural-7' />
                    </label>
                    <button className='button-s text-natural-4 hover:text-natural-7 px-4'>Signup</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter