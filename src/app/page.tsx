'use client';
import React from 'react';
import Nav from '@/components/nav/nav';
import { Header } from '@/components/header/header';
import Projects from '@/components/projects/index';
import Testimonails from '@/components/testimonials';
import { Footer } from '@/components/footer';
import Experiences from '@/components/experiences';
import Skills from '@/components/skills';
import { useEffect } from 'react';
import AOS from 'aos';

import '@styles/style.css';
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Skills />
      <Projects />
      <Experiences />
      <Testimonails />
      <Footer />
    </React.Fragment>
  );
}
