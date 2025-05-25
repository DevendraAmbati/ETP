import React from 'react'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

const Header = () => {
  return (
    <>
      <div className="hidden md:block">
      <DesktopHeader/>
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
    </>
  )
}

export default Header
