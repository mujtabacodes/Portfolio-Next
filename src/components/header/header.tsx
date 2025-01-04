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
      {/* Left Section */}
      <div
        className="flex flex-col items-center md:items-start text-center md:text-left justify-center w-full md:w-[55%] lg:w-[60%] px-6"
        data-aos="fade-up-right"
      >
        <Desc className="text-lg">Hello 👋 My name is</Desc>
        <Heading>Mujtaba Shafique</Heading>
        <div
          className="mt-2 text-base md:text-lg overflow-hidden relative"
          // animate={{ y: [0, -40, -80] }} // Sliding effect for titles
          // transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <div className="absolute">
            <Desc>
              I am a{' '}
              <span className="text-heightlightColor font-bold">
                Full Stack Developer
              </span>
              .
            </Desc>
          </div>
          <div className="absolute">
            <Desc>
              A{' '}
              <span className="text-heightlightColor font-bold">
                Software Engineer
              </span>{' '}
              with 4+ years of experience.
            </Desc>
          </div>
          <div className="absolute">
            <Desc>
              Completed{' '}
              <span className="text-heightlightColor font-bold">
                20+ Industrial Projects
              </span>
              .
            </Desc>
          </div>
        </div>
        <Desc className="mt-4">
          I dd specialize in crafting exceptional digital experiences and
          solving complex problems. My current focus is on{' '}
          <span className="text-heightlightColor font-bold">
            Full Stack Development
          </span>
          , designing and developing immersive applications.
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
        <SocialLinks layout="col" className="hidden md:block" />
      </div>
    </Section>
  );
}
