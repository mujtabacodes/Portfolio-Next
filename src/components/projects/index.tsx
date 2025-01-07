'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import { Section } from '@/styles/utils';
import { SectionHeader } from '../section-header';
import { projectData } from '@/config/data';
export function Projects() {
  const cards = projectData.map((card, index) => (
    <Card key={card.posterImage} card={card} index={index} />
  ));

  return (
    <Section id="projects" data-aos="zoom-out-up" className="relative">
      <SectionHeader
        heading="Projects"
        subTitle="Featured Work and Project Showcase"
        align="start"
      />
      <Carousel items={cards} />
    </Section>
  );
}
