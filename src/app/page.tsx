import React from 'react';
import Nav from '@/components/nav/nav';
import { Header } from '@/components/header/header';
import Testimonails from '@/components/testimonials';
import { Footer } from '@/components/footer';
import Experiences from '@/components/experiences';
import Skills from '@/components/skills';
import '@styles/style.css';
import AOSWrapper from '@/components/aos-wrapper';
import { Projects } from '@/components/projects';
import { Timeline } from '@/components/ui/timeline';
import { timelineData } from '@/config/timeline';
import GithubSection from '@/components/ui/github-section';
export default function Home() {
  return (
    <div className="mx-3">
      <Nav />
      <Header />
      <AOSWrapper animationType="zoom-in-up">
        <Skills />
        <Projects />
      </AOSWrapper>

      <Experiences />
      <GithubSection />
      <AOSWrapper animationType="zoom-in-up">
        <Testimonails />
      </AOSWrapper>

      <Footer />
    </div>
  );
}
