import React, { useState } from 'react'
import { Icon } from "@iconify/react"
import NavLinks from '@components/tokens/NavLinks'

const Header = () => {
  const [isSideBarOpen , setSideBarOpen] = useState(false)
  const openSidebar = () => setSideBarOpen(true)
  const closeSidebar = () => setSideBarOpen(false)
  return (
    <header className='header-section'>
        {isSideBarOpen && <div className='faded-backdrop' onClick={() => closeSidebar()}></div>}
        <div className="left-section">
        <button className='menu-btn' onClick={() => openSidebar()}><Icon icon="solar:hamburger-menu-outline" width="24" height="24" /> <span className='hidden'>Menu</span></button>
        <span className='logo'>3legant<span>.</span></span>
        </div>
        <div className="middle-section">
          <div className={`side-bar ${isSideBarOpen ? 'active' : 'in-active'}`}>
            <NavLinks />
          </div>
        </div>
        <div className="other-actions">other actions</div>
    </header>
  )
}

export default Header