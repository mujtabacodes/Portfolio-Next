import React from 'react';
import { Navbar } from './navbar/nav-bar';
import { MobileNav } from './appbar/app-bar';
import { Logo } from '../logo';
import { ModeToggle } from '../theme-switcher/mode-toggle';

function Nav() {
  return (
    <>
      <Navbar />
      <div className="p-4 flex md:hidden w-full  justify-between">
        <Logo />
        <div>
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </>
  );
}

export default Nav;
