import React from 'react';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { ModeToggle } from '../../theme-switcher/mode-toggle';
import { Button } from '../../ui/button';

export function Navbar() {
  return (
    <div className="hidden border-[1px] border-slate-500 dark:border-white rounded-full p-4 px-10 md:flex justify-between items-center m-5 sticky">
      <Logo />
      <ul className="flex gap-2">
        <li>
          {' '}
          <Button size="lg" variant="link">
            <Link href="#contact-us">About</Link>
          </Button>
        </li>
        <li>
          {' '}
          <Button size="lg" variant="link">
            <Link href="#contact-us">About</Link>
          </Button>
        </li>
        <li>
          {' '}
          <Button size="lg" variant="link">
            <Link href="#contact-us">About</Link>
          </Button>
        </li>
        <li>
          {' '}
          <Button size="lg" variant="link">
            <Link href="#contact-us">About</Link>
          </Button>
        </li>
      </ul>

      <ul className="flex gap-3 items-center">
        <li>
          {' '}
          <ModeToggle />
        </li>
        <li>|</li>
        <li>
          <Button size="lg" variant="outline_styled">
            <Link href="#contact-us">About</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
