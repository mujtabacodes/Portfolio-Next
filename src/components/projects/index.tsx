'use client';
import { useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import projects from '@config/project.json';
import { Text } from '@/styles/typos';
import { Section } from '@/styles/utils';
import { SectionHeader } from '../section-header';

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(1); // Default to the first project

  const handleProjectClick = (index: number) => {
    setActiveProjectIndex(index);
  };

  return (
    <Section>
      <SectionHeader
        heading="Projects"
        subTitle="Featured Work and Project Showcase"
        align="start"
      />

      <TabGroup
        as="div"
        className="flex flex-col md:flex-row w-full h-[60vh] bg-red-400"
        selectedIndex={activeProjectIndex}
      >
        <TabList className="flex gap-4 overflow-x-auto md:flex-col md:overflow-y-auto md:max-h-full custom-scrollbar bg-orange-400">
          {projects.map(({ id, name }, index) => (
            <Tab
              key={id}
              className={({ selected }) =>
                selected ? 'flex-shrink-0 text-blue-500' : 'flex-shrink-0'
              }
              onClick={() => handleProjectClick(index)}
            >
              <Text className="text-left">{name}</Text>
            </Tab>
          ))}
        </TabList>
        <TabPanels className="w-full bg-green-600 h-full">
          {projects.map(({ id, name, description, techstack }) => (
            <TabPanel key={id} className="rounded-xl bg-white/10 p-3">
              <h1>{name}</h1>
              <p>{description}</p>
              <ul className="mt-3">
                {techstack.map((tech, index) => (
                  <li
                    key={index}
                    className="text-sm/6 font-semibold text-white"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </Section>
  );
}
