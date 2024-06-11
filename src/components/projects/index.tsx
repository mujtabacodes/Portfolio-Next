'use client';
import { useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import projects from '@config/project.json';
import { Text } from '@/styles/typos';
import { Section } from '@/styles/utils';
import { SectionHeader } from '../section-header';

import ProjectCard from './components/project-card';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number>(1);

  const handleProjectClick = (index: number) => {
    setActiveProject(index);
  };

  return (
    <Section id="projects" data-aos="zoom-out-up">
      <SectionHeader
        heading="Projects"
        subTitle="Featured Work and Project Showcase"
        align="start"
      />

      <TabGroup
        as="div"
        className="flex flex-col md:flex-row w-full md:h-[60vh]"
        selectedIndex={activeProject}
      >
        <TabList className="flex gap-2 md:gap-1 overflow-x-auto md:flex-col md:overflow-y-auto md:max-h-full projects-scrollbar">
          {projects.map(({ id, name }, index) => (
            <Tab
              key={id}
              className={({ selected }) =>
                selected ? 'tab active-tab' : 'tab'
              }
              onClick={() => handleProjectClick(index)}
            >
              <Text className="text-left">{name}</Text>
            </Tab>
          ))}
        </TabList>
        <TabPanels className="w-full h-full">
          {projects.map((project) => (
            <TabPanel
              key={project.id}
              className="rounded-xl bg-secondary shadow-lg p-3 md:ml-3 shadow-boxShadow"
            >
              <ProjectCard project={project} />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </Section>
  );
}
