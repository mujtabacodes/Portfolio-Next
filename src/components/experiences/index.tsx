'use client';

import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeader } from '../section-header';
import { Section } from '@/styles/utils';

function Experience() {
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      title: 'Job Title 1',
      company: 'Company Name 1',
      date: '2024-05-29 to Present',
      description: 'Description about the job 1...',
      imageSrc: 'https://via.placeholder.com/150',
      isOpen: true,
    },
    {
      id: 2,
      title: 'Job Title 2',
      company: 'Company Name 2',
      date: '2024-05-30 to Present',
      description: 'Description about the job 2...',
      imageSrc: 'https://via.placeholder.com/150',
      isOpen: false,
    },
  ]);

  const handleAccordionClick = (accordionId: number) => {
    const updatedAccordions = accordions.map((accordion) => ({
      ...accordion,
      isOpen: accordion.id === accordionId ? !accordion.isOpen : false,
    }));
    setAccordions(updatedAccordions);
  };

  return (
    <Section>
      <SectionHeader
        heading="Experience"
        subTitle="A story of growth, leanring & Professional Development"
        align="end"
      />

      {accordions.map((accordion) => (
        <Accordion type="single" collapsible key={accordion.id}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </Section>
  );
}

export default Experience;
