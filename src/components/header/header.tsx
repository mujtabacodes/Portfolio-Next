import React from 'react';
import { cn } from '@/lib/utils';
import { Heading, Desc } from '@/styles/typos';
import Link from 'next/link';
import { Button } from '../ui/button';
const Design3D = dynamic(() => import('../design-3D'), {
  loading: () => <p>Loading...</p>,
});
// import Design3D from '../design-3D';
import SocialLinks from './components/socials';
import { Card } from '../ui/card';
import GradientOverlay from '../gradient';
import dynamic from 'next/dynamic';

export function Header() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full justify-between px-[2rem] py-[1rem] md:h-[74vh]">
      <div className="flex flex-col w-full md:w-[55%] lg:w-[65%] items-center md:items-start text-center md:text-left justify-center">
        <Desc>Hello 👋 My name is</Desc>
        <Heading>Mujtaba Shafique</Heading>
        <Desc>
          I&apos;m <span className="highlighted-text">software engineer </span>.
          I possess strong problem-solving skills and specialize in crafting
          exceptional digital experiences. My current area of focus is in the{' '}
          <span className="highlighted-text">Full Stack Development</span>,
          where I actively engage in developing and designing immersive
          applications.
        </Desc>
        <Button variant="outlineStyled" className="mt-5">
          <a href="/resume.pdf" download="Mujtaba Shafique.pdf">
            Resume
          </a>
        </Button>
      </div>
      <div className="flex w-full md:w-[45%] lg:w-[35%] min-h-[30vh] items-center design3d">
        <Design3D />
        <SocialLinks layout="col" className="hidden md:block" />
      </div>
    </div>
  );
}
