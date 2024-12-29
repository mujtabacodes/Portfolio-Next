import React from 'react';
import { cn } from '@/lib/utils';
import { Heading, Desc, ButtonText } from '@/styles/typos';
import Link from 'next/link';
import { Button } from '../ui/button';
import dynamic from 'next/dynamic';
import { Section } from '@/styles/utils';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import SocialLinks from '../socials';

const Design3D = dynamic(() => import('../design-3D'), {
  loading: () => <p>Loading...</p>,
});

export function Header() {
  return (
    <Section
      id="header"
      className="flex flex-col md:flex-row w-full justify-center items-center min-h-[70vh]"
      data-aos="zoom-in-up"
    >
      <div
        className="flex flex-col items-center md:items-start text-center md:text-left justify-center w-full md:w-[55%] lg:w-[60%] px-6"
        data-aos="fade-up-right"
      >
        <Desc className="text-lg">Hello 👋 My name is</Desc>
        <Heading>Mujtaba Shafique</Heading>
        <Desc className="mt-2 text-base md:text-lg">
          I&apos;m a{' '}
          <span className="text-heightlightColor font-bold">
            software engineer
          </span>
          . I possess strong problem-solving skills and specialize in crafting
          exceptional digital experiences. My current focus is on{' '}
          <span className="text-heightlightColor font-bold">
            Full Stack Development
          </span>
          , where I actively engage in developing and designing immersive
          applications.
        </Desc>
        <Button
          size="lg"
          variant="outlineStyled"
          className="mt-5 relative overflow-hidden w-full sm:w-auto"
        >
          <ButtonText className="pointer-events-none flex gap-2 py-2">
            <FaCloudDownloadAlt className="text-xl" />
            Resume
          </ButtonText>
          <Link
            href={'/Mujtaba_Shafique.pdf'}
            target="_blank"
            download="Mujtaba Shafique +1.5y MERN.pdf"
            className="absolute inset-0 z-10 block w-full h-full"
          />
        </Button>
      </div>

      {/* Right Section */}
      <div
        className="flex justify-center items-center w-full md:w-[45%] lg:w-[40%] min-h-[30vh]"
        data-aos="fade-up-left"
      >
        <Design3D />
        {/* <SocialLinks layout="col" className="hidden md:block" /> */}
      </div>
    </Section>
  );
}
