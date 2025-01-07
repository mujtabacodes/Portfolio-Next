import React from 'react';
import { cn } from '@/lib/utils';
import { Heading, Desc, ButtonText } from '@/styles/typos';
import Link from 'next/link';
import { Button } from '../ui/button';
import dynamic from 'next/dynamic';
import { Section } from '@/styles/utils';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import SocialLinks from '../socials';
import NumberTicker from '../ui/number-ticker';
import MorphingText from '../ui/morphing-text';
import WordRotate from '../ui/word-rotate';
import HyperText from '../ui/hyper-text';
import TypingAnimation from '../ui/typing-animation';
import ShimmerButton from '../ui/shimmer-button';
import AnimatedShinyText from '../ui/animated-shiny-text';

const Design3D = dynamic(() => import('../design-3D'), {
  loading: () => <p>Loading...</p>,
});

export function Header() {
  return (
    <Section
      id="header"
      className="flex flex-col-reverse md:flex-row w-full justify-center items-center min-h-[100vh]"
      data-aos="zoom-in-up"
    >
      <div
        className="flex flex-col gap-2 items-center md:items-start text-center md:text-left justify-center w-full md:w-[55%] lg:w-[60%] px-6"
        data-aos="fade-up-right"
      >
        <Desc className="text-lg">Hello 👋 My name is</Desc>

        <Heading>
          <TypingAnimation>Mujtaba Shafique</TypingAnimation>
        </Heading>

        <Desc className="flex ">
          🧑🏻‍💻 I am a{' '}
          <WordRotate
            words={[
              'Software Engineer',
              'React Developer',
              'NextJS Developer',
              'NodeJS Developer',
              'NestJS Developer',
            ]}
            className="text-heightlightColor"
          />{' '}
        </Desc>
        <Desc>
          🎯 Delivered <NumberTicker value={15} />+ successful projects
        </Desc>
        <Desc>
          💼 <NumberTicker value={3.5} decimalPlaces={1} />+ years of Full-Stack
          experience
        </Desc>

        <Button
          size="lg"
          variant="outlineStyled"
          className="mt-5 relative overflow-hidden w-full sm:w-auto"
        >
          <AnimatedShinyText>
            <ButtonText className="pointer-events-none flex gap-2 py-2">
              🎉 | Resume
            </ButtonText>
          </AnimatedShinyText>

          <Link
            href={'/Mujtaba_Shafique.pdf'}
            target="_blank"
            download="Mujtaba Shafique +1.5y MERN.pdf"
            className="absolute inset-0 z-10 block w-full h-full"
          />
        </Button>
      </div>

      <div
        className="flex justify-center items-center w-full md:w-[45%] lg:w-[40%] min-h-[30vh] design3d"
        data-aos="fade-up-left"
      >
        <Design3D />
        <SocialLinks layout="col" className="hidden md:block" />
      </div>
    </Section>
  );
}
