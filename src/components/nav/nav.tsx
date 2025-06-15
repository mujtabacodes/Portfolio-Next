'use client';
import React, { useState, useEffect } from 'react';
import { Navbar } from './navbar/nav-bar';
import { MobileNav } from './appbar/app-bar';
import { Logo } from '../logo';
import { ModeToggle } from '../theme-switcher/mode-toggle';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-2">
      <Navbar />
      <div
        className={`p-4 mobile-nav justify-between align-center fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out mx-1 ${
          isScrolled
            ? 'bg-secondary shadow-lg !p-1 mt-6 rounded-full border w-fit right-0 '
            : 'bg-transparent w-full'
        }`}
      >
        {!isScrolled && <Logo />}
        <div className="flex gap-2">
          {!isScrolled && <ModeToggle />}
          <MobileNav />
        </div>
      </div>
    </div>
  );
}

export default Nav;
