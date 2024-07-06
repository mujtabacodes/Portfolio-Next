import React from 'react';
import Nav from '@/components/nav/nav';
import { Header } from '@/components/header/header';
import Projects from '@/components/projects/index';
import Testimonails from '@/components/testimonials';
import { Footer } from '@/components/footer';
import Experiences from '@/components/experiences';
import Skills from '@/components/skills';
import '@styles/style.css';
import 'aos/dist/aos.css';
import AOSWrapper from '@/components/aos-wrapper';
export default function Home() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <AOSWrapper animationType="zoom-in-up">
        <Skills />
        <Projects />
      </AOSWrapper>
      <Experiences />
      <AOSWrapper animationType="zoom-in-up">
        <Testimonails />
      </AOSWrapper>
      <Footer />
    </React.Fragment>
  );
}
