import React, { useEffect, useState } from 'react'
import { Icon } from "@iconify/react"
import { NavLink } from 'react-router-dom';
import NavLinks from '@components/tokens/NavLinks';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const goto = useNavigate()

  const [isSideBarOpen , setSideBarOpen] = useState(false)
  const openSidebar = () => setSideBarOpen(true)
  const closeSidebar = () => setSideBarOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (isSideBarOpen && window.innerWidth >= 1024) {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [isSideBarOpen]);
  
  const goHome = () => {
    goto("/")
    setSideBarOpen(false)
  }
  return (
    <header className='header-section bg-white'>
        {isSideBarOpen && <div className='faded-backdrop' onClick={() => closeSidebar()}></div>}

        <div className="left-section">
          <button className='menu-btn' onClick={() => openSidebar()}><Icon icon="solar:hamburger-menu-outline" width="24" height="24" /> <span className='hidden'>Menu</span></button>
          <button className='app-logo' onClick={() => goHome()}>3legant<span>.</span></button>
        </div>

        <div className="middle-section">
          <div className={`side-bar ${isSideBarOpen ? 'active' : 'in-active'}`}>
            <div className='w-full lg:w-max vertical gap-4'>
              {/* Logo & Close Btn */}
              <div className='horizontal justify-between lg:hidden w-full'>
                <button className='app-logo' onClick={() => goHome()}>3legant<span>.</span></button>
                <div onClick={() => closeSidebar()} className='aspect-square w-6 ghost-hover-full grid-center cursor-pointer transition-all'>
                    <Icon className='text-natural-5' icon="hugeicons:cancel-01" width="20" height="20" />
                </div >
              </div>
              {/* Search Input */}
              <label htmlFor="searchInput" className="search-container">
                <span><Icon icon="hugeicons:search-01" width="24" height="24" /></span>
                <input type="text" placeholder="Search" id="searchInput" autoComplete='off' />
              </label>
              {/* Nav links */}
              <NavLinks setSideBarOpen={setSideBarOpen} />
            </div>

            <div className='vertical w-full lg:hidden gap-4'>
              {/* Other links */}
              <div className='vertical w-full gap-2'>
                <NavLink
                to="/cart"
                className={({ isActive }) => `${isActive ? 'active' : ''} single-link`}
                onClick={() =>setSideBarOpen(false)}
              > 
                <span>Cart</span>
                <div className='horizontal gap-1'>
                  <button aria-label="Cart"><Icon icon="hugeicons:shopping-bag-03" width="24" height="24" /></button>
                  <label className='badge'>2</label>
                </div>
                </NavLink>
                <NavLink
                  to="/wishlist"
                  className={({ isActive }) => `${isActive ? 'active' : ''} single-link`}
                  onClick={() =>setSideBarOpen(false)}
                > 
                  <span>Wishlist</span>
                  <div className='horizontal gap-1'>
                    <button aria-label="Cart"><Icon icon="solar:heart-linear" width="24" height="24" /></button>
                    <label className='badge'>2</label>
                  </div>
                </NavLink>
              </div>
              {/* Sign-in btn */}
              <button className='btn w-full !py-[10px]'>Sign In</button>

              {/* Socials */}
              <div className='horizontal gap-6'>
                <button className='w-6 h-6 ghost-hover-full grid-center' aria-label='facebook-socials'>
                  <Icon icon="hugeicons:facebook-02" height="23" />
                </button>
                <button className='w-6 h-6 ghost-hover-full grid-center' aria-label='facebook-socials'>
                  <Icon icon="hugeicons:instagram" height="24" />
                </button>
                <button className='w-6 h-6 ghost-hover-full grid-center' aria-label='facebook-socials'>
                  <Icon icon="hugeicons:youtube" height="26" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="other-actions">
          <button  aria-label="Search"><Icon icon="hugeicons:search-01" width="24" height="24" /></button>
          <button  aria-label="Profile"><Icon icon="hugeicons:user-circle-02" width="24" height="24" /></button>
          <div className='horizontal gap-1'>
            <button aria-label="Cart"><Icon icon="hugeicons:shopping-bag-03" width="24" height="24" /></button>
            <label className='badge'>2</label>
          </div>
        </div>
    </header>
  )
}

export default Header