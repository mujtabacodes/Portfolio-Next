import React, { useState } from 'react';
import { SectionHeader } from '../section-header';
import { Section } from '@/styles/utils';
import Accordion from './components/accordion';
import experiences from '@config/experiences.json';
function Experiences() {
  return (
    <Section id="experiences">
      <SectionHeader
        heading="Experience"
        subTitle="A story of growth, leanring & Professional Development"
        align="end"
      />
      <div className="bg-secondary  rounded-xl">
        {experiences.map((experience) => (
          <div key={experience.id}>
            <Accordion
              data={experience}
              open={experience.id == 1 ? true : false}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experiences;
