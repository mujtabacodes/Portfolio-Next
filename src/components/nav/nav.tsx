import React from 'react'
import { Navbar } from './navbar/nav-bar'
import { MobileNav } from './appbar/app-bar'

const Nav = () => {
  return (
    <React.Fragment>
         <Navbar/>
      <div className="p-4 flex md:hidden w-full justify-between">
      <p>LOGO</p>
      <MobileNav/>
      </div>
    </React.Fragment>
  )
}

export default Nav