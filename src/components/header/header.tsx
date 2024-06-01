import React from 'react';
import { cn } from '@/lib/utils';
import { Heading, Desc } from '@/styles/typos';
import Link from 'next/link';
import { Button } from '../ui/button';
import Design3D from '../design-3D';
import SocialLinks from './components/socials';
import { Card } from '../ui/card';
import GradientOverlay from '../gradient';

export function Header() {
  return (
    <div
      className={cn(
        'w-full h-[80vh] items-center justify-between p-10 flex flex-col-reverse md:flex-row',
      )}
    >
      <div className="w-[75%]">
        <Desc className="">Hello 👋 My name is</Desc>
        <Heading>Mujtaba Shafique</Heading>
        <Desc className="">
          I&apos;m <span className="highlighted-text">software engineer </span>.
          I possess strong problem-solving skills and specialize in crafting
          exceptional digital experiences. My current area of focus is in the{' '}
          <span className="highlighted-text">Full Stack Development</span>,
          where I actively engage in developing and designing immersive
          applications..
        </Desc>
        <Button variant="outlineStyled" className="mt-5">
          <a href="/resume.pdf" download="Mujtaba Shafique.pdf">
            Resume
          </a>
        </Button>
      </div>
      <Card />
      <Design3D />
      <SocialLinks layout="col" />
    </div>
  );
}
