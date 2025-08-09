import NavLinks from '@components/tokens/NavLinks'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from "@iconify/react"

const Footer = () => {
  return (
    <footer className='footer-01 '>
        <div className='vertical *:w-full gap-10 lg:gap-12 uni-pad'>
            <div className='vertical items-center gap-10 lg:horizontal justify-between '>
                <div className='vertical items-center gap-4 lg:horizontal lg:gap-8'>
                    <span className='app-logo'>3legant<span>.</span></span>
                    <div className='h-[1px] w-40 lg:h-6 lg:w-[1px] bg-natural-4'></div>
                    <span className='caption-1'>Gift & Decoration Store</span>
                </div>
                <div><NavLinks /></div>
            </div>
            <div className='vertical max-lg:flex-col-reverse items-center gap-10 lg:horizontal justify-between py-4 border-t-[.5px] border-natural-5'>
                <div className='vertical max-lg:flex-col-reverse items-center gap-4 lg:horizontal lg:gap-8 w-full'>
                    <span className='caption-2 shrink-0'>Copyright © 2023 3legant. All rights reserved</span>
                    <div className="nav-links-container fix-up">
                        <NavLink
                            to="/privacy-policy"
                            className={ ({ isActive }) => `${ isActive ? 'active' : '' } nav-link` }
                        >
                            Privacy Policy
                        </NavLink>
                        <NavLink
                            to="/privacy-policy"
                            className={ ({ isActive }) => `${ isActive ? 'active' : '' } nav-link` }
                        >
                            Privacy Policy
                        </NavLink>
                    </div>
                </div>
                <div className='horizontal gap-6'>
                    <button className='w-6 h-6 ghost-hover-full grid-center text-natural-4 hover:text-white' aria-label='facebook-socials'>
                        <Icon icon="hugeicons:facebook-02" height="23" />
                    </button>
                    <button className='w-6 h-6 ghost-hover-full grid-center text-natural-4 hover:text-white' aria-label='facebook-socials'>
                        <Icon icon="hugeicons:instagram" height="24" />
                    </button>
                    <button className='w-6 h-6 ghost-hover-full grid-center text-natural-4 hover:text-white' aria-label='facebook-socials'>
                        <Icon icon="hugeicons:youtube" height="26" />
                    </button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer