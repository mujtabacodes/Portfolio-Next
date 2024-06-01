import { ResponsiveBG } from '@/components/particles/particles';
import { ModeToggle } from '@/components/theme-switcher/mode-toggle';
import Image from 'next/image';
import React from 'react';
import Nav from '@/components/nav/nav';
import { Header } from '@/components/header/header';
import Projects from '@/components/projects';
import Experience from '@/components/experiences';
import Testimonails from '@/components/testimonials';
import { Footer } from '@/components/footer';
import '@styles/style.css';
export default function Home() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Projects />
      <Experience />
      <Testimonails />
      <Footer />
    </React.Fragment>
  );
}
