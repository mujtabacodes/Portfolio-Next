'use client';
import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { ModeToggle } from '../../theme-switcher/mode-toggle';
import { ButtonText } from '@/styles/typos';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { id: 'about', label: 'About', href: '' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experiences', label: 'Experience', href: '#experiences' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let active = 'about';
      NAV_ITEMS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          active = id;
        }
      });

      setActiveSection(active);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`hidden md:flex justify-between items-center  pl-6 m-5 fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'w-[85%] bg-secondary p-3 rounded-full shadow-lg '
          : 'w-[90%] top-2 p-4 border rounded-full'
      }`}
    >
      <Logo />
      <ul className="flex gap-11">
        {NAV_ITEMS.map(({ id, label, href }) => (
          <li key={id}>
            <Link
              href={href}
              className={`link-underline ${
                activeSection === id ? 'font-bold text-primary' : ''
              }`}
            >
              <ButtonText>{label}</ButtonText>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex gap-3 items-center">
        <li>
          <ModeToggle />
        </li>
        <li>|</li>
        <li>
          <Link href={'#contact'}>
            <Button size="lg" variant="primaryStyled">
              <ButtonText>Contact</ButtonText>
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
