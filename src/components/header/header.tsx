import React from 'react'
import Design3D from '../design-3D';
import { cn } from '@/lib/utils';
import { Heading, T24 } from '@/styles/typos';
import { Button } from '../ui/button';
import Link from 'next/link';
import SocialLinks from './components/socials';
export const Header = () => {
  return (
    <div className={cn('w-full h-[80vh] items-center justify-between p-10 flex flex-col-reverse md:flex-row')}>
      <div className='w-[75%]'>
        <T24 className="">Hello 👋 My name is</T24>
        <Heading>Mujtaba Shafique</Heading>
        <T24 className="">
          I&apos;m a software engineer. I possess strong problem-solving skills and specialize in crafting exceptional digital experiences. My current area of focus is in the web2 and web3 domain, where I actively engage in developing and designing immersive applications..
        </T24>
        <Button variant="outline_styled" className='mt-5'>
          <a href="/resume.pdf" download='Mujtaba Shafique.pdf'>
            Resume
            </a>
            </Button>
      </div>
      <Design3D />
      <SocialLinks layout='col' />
    </div>
  )
}
