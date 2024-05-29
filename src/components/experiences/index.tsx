"use client"
import React, { useState } from 'react'
import { SectionHeader } from '../section-header'
import Accordion from './components/accordions'

const  Experience= () => {
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      title: "Job Title 1",
      company: "Company Name 1",
      date: "2024-05-29 to Present",
      description: "Description about the job 1...",
      imageSrc: "https://via.placeholder.com/150",
      isOpen: true,
    },
    {
      id: 2,
      title: "Job Title 2",
      company: "Company Name 2",
      date: "2024-05-30 to Present",
      description: "Description about the job 2...",
      imageSrc: "https://via.placeholder.com/150",
      isOpen: false,
    },
    {
      id: 3,
      title: "Job Title 3",
      company: "Company Name 2",
      date: "2024-05-30 to Present",
      description: "Description about the job 2...",
      imageSrc: "https://via.placeholder.com/150",
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
    <div className="container mx-auto py-8">
      <SectionHeader heading='Experience' subTitle='A story of growth, leanring & Professional Development' align='right'/>

      {accordions.map((accordion) => (
        <Accordion
          key={accordion.id}
          title={accordion.title}
          company={accordion.company}
          date={accordion.date}
          description={accordion.description}
          imageSrc={accordion.imageSrc}
          isOpen={accordion.isOpen}
          onClick={() => handleAccordionClick(accordion.id)}
        />
      ))}
    </div>
  );
};



export default Experience 