import React from 'react';
import { ModeToggle } from '../../theme-switcher/mode-toggle';
import { Button } from '../../ui/button';
import { Logo } from '@/components/logo';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="hidden border-[1px] border-slate-500 dark:border-white rounded-full p-4 px-10 md:flex justify-between items-center m-5 sticky">
      <Logo />
      <ul className="flex gap-2">
        <li>
          <Button size={'lg'} variant="link">
            <Link href={'#'}>About</Link>
          </Button>
        </li>
        <li>
          <Button size={'lg'} variant="link">
            <Link href={'#projects'}>Projects</Link>
          </Button>
        </li>
        <li>
          <Button size={'lg'} variant="link">
            <Link href={'#experiences'}>Experiences</Link>
          </Button>
        </li>
        <li>
          <Button size={'lg'} variant="link">
            <Link href={'#testimonials'}>Testimonails</Link>
          </Button>
        </li>
      </ul>

      <ul className="flex gap-3 items-center">
        <li>
          <ModeToggle />
        </li>
        <li>|</li>
        <li>
          <Button
            size="lg"
            // variant="outlineStyled"
            className="border border-[#50c5d7] rounded-full border-input bg-background shadow-sm hover:bg-[#50c5d7] hover:text-[#020817] hover:bg-transparent dark:hover:text-[#020817] bg-gradient-to-r from-blue-500 to-teal-400"
          >
            <Link href={'#contact'}>Contact</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};
