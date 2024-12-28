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
import WorldMap from '@/components/ui/world-map';
export default function Home() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <AOSWrapper animationType="zoom-in-up">
        <Skills />
        <Projects />
      </AOSWrapper>
      <Timeline data={timelineData} />
      <Experiences />
      <AOSWrapper animationType="zoom-in-up">
        <Testimonails />
      </AOSWrapper>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />

      <Footer />
    </React.Fragment>
  );
}
