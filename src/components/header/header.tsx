import React from 'react';
import { cn } from '@/lib/utils';
import { Heading, Desc } from '@/styles/typos';
import Link from 'next/link';
import { Button } from '../ui/button';
const Design3D = dynamic(() => import('../design-3D'), {
  loading: () => <p>Loading...</p>,
});
// import Design3D from '../design-3D';
import SocialLinks from '../socials';
import { Card } from '../ui/card';
import GradientOverlay from '../gradient';
import dynamic from 'next/dynamic';
import { DownloadCloudIcon } from 'lucide-react';
import { Section } from '@/styles/utils';

export function Header() {
  return (
    <Section
      id="experiences"
      className="flex flex-col-reverse md:flex-row w-full justify-between py-[1rem]"
    >
      <div className="flex mt-2 md:mt-0 flex-col w-full md:w-[55%] lg:w-[65%] items-start text-center md:text-left justify-center">
        <Desc className="self-start">Hello 👋 My name is</Desc>
        <Heading>Mujtaba Shafique</Heading>
        <Desc className="md:mt-2">
          I&apos;m{' '}
          <span className="text-heightlightColor">software engineer </span>. I
          possess strong problem-solving skills and specialize in crafting
          exceptional digital experiences. My current area of focus is in the{' '}
          <span className="text-heightlightColor">Full Stack Development</span>,
          where I actively engage in developing and designing immersive
          applications.
        </Desc>

        <Button
          size="lg"
          variant="outlineStyled"
          className="mt-5 relative overflow-hidden w-full sm:w-auto"
        >
          <div className="pointer-events-none flex">
            <DownloadCloudIcon />
            <span className="ml-2">Resume</span>
          </div>
          <Link
            href={'/resume.pdf'}
            download="Mujtaba Shafique.pdf"
            className="absolute inset-0 z-10"
            style={{ display: 'block', width: '100%', height: '100%' }}
          />
        </Button>
      </div>
      <div className="flex w-full md:w-[45%] lg:w-[35%] min-h-[30vh] items-center design3d">
        <Design3D />
        <SocialLinks layout="col" className="hidden md:block" />
      </div>
    </Section>
  );
}
