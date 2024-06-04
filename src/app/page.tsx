import { ResponsiveBG } from '@/components/particles';
import { ModeToggle } from '@/components/theme-switcher/mode-toggle';
import Image from 'next/image';
import React from 'react';
import Nav from '@/components/nav/nav';
import { Header } from '@/components/header/header';
import Projects from '@/components/projects';
import Testimonails from '@/components/testimonials';
import { Footer } from '@/components/footer';
import '@styles/style.css';
import Experiences from '@/components/experiences';
export default function Home() {
  return (
    <React.Fragment>
      <Nav />
      {/* <Header /> */}
      {/* <Projects /> */}
      {/* <Experiences /> */}
      <Testimonails />
      <Footer />
    </React.Fragment>
  );
}
