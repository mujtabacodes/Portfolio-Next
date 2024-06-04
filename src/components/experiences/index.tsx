import React, { useState } from 'react';
import { SectionHeader } from '../section-header';
import { Section } from '@/styles/utils';
import Accordion from './components/accordions';
import experiences from '@config/experiences.json';
function Experience() {
  return (
    <Section>
      <SectionHeader
        heading="Experience"
        subTitle="A story of growth, leanring & Professional Development"
        align="end"
      />
      O+
      <div className="bg-secondary/50 rounded-xl">
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

export default Experience;
