import React, { useState } from 'react';
import { SectionHeader } from '../section-header';
import { Section } from '@/styles/utils';
import Accordion from './components/accordion';
import experiences from '@config/experiences.json';
import { Timeline } from '../ui/timeline';
import { timelineData } from '@/config/timeline';
function Experiences() {
  return (
    <Section id="experiences" className="mt-10">
      <SectionHeader
        heading="Experience"
        subTitle="A story of growth, leanring & Professional Development"
        align="end"
      />
      <Timeline data={timelineData} />
      {/* <div className="bg-secondary  rounded-xl shadow-lg shadow-boxShadow">
        {experiences.map((experience) => (
          <div key={experience.id}>
            <Accordion data={experience} open={false} />
          </div>
        ))}
      </div> */}
    </Section>
  );
}

export default Experiences;
