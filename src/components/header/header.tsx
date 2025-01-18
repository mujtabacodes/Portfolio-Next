import React from 'react';
import { cn } from '@/lib/utils';
import { Heading, Desc, ButtonText } from '@/styles/typos';
import Link from 'next/link';
import { Button } from '../ui/button';
import dynamic from 'next/dynamic';
import { Section } from '@/styles/utils';
import { FaCloudDownloadAlt, FaFastForward } from 'react-icons/fa';
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
  const startDate = new Date('2021-05-01');
  const currentDate = new Date();
  const experienceInYears = parseFloat(
    (
      (currentDate.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365)
    ).toFixed(1),
  );
  return (
    <Section
      id="header"
      className=" container flex flex-col-reverse md:flex-row Fw-full justify-center items-center min-h-[100vh] mx-1"
      data-aos="zoom-in-up"
    >
      <div
        className=" flex flex-col gap-2 items-center md:items-start text-center md:text-left justify-center w-full md:w-[55%] lg:w-[60%] px-6"
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
          🎯 Successfully delivered <NumberTicker value={15} />+ high-impact
          industrial projects
        </Desc>
        <Desc>
          ✨ Our{' '}
          <NumberTicker value={Number(experienceInYears)} decimalPlaces={1} />+
          years of proven expertise as a Full-Stack Developer
        </Desc>

        <Button
          size="lg"
          variant="outlineStyled"
          className="mt-5 relative overflow-hidden w-full sm:w-auto bg-secondary"
        >
          <AnimatedShinyText>
            <ButtonText className="pointer-events-none flex gap-2 py-2 border-black">
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
