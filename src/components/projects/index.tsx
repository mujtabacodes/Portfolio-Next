'use client';
import { useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import projects from '@config/project.json';
import { Text } from '@/styles/typos';
import { Section } from '@/styles/utils';
import { SectionHeader } from '../section-header';

import ProjectCard from './project-card';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number>(1);

  const handleProjectClick = (index: number) => {
    setActiveProject(index);
  };

  return (
    <Section>
      <SectionHeader
        heading="Projects"
        subTitle="Featured Work and Project Showcase"
        align="start"
      />

      <div className="bg-secondary h-5 w-5">secondary</div>
      <div className="bg-destructive-foreground h-5 w-5">
        destructive foreground
      </div>
      <div className="bg-destructive h-5 w-5">destructive</div>

      <TabGroup
        as="div"
        className="flex flex-col md:flex-row w-full h-[60vh]"
        selectedIndex={activeProject}
      >
        <TabList className="flex overflow-x-auto md:flex-col md:overflow-y-auto md:max-h-full custom-scrollbar">
          {projects.map(({ id, name }, index) => (
            <Tab
              key={id}
              className={({ selected }) =>
                selected ? 'active-tab highlighted-text tab' : 'tab'
              }
              onClick={() => handleProjectClick(index)}
            >
              <Text className="text-left">{name}</Text>
            </Tab>
          ))}
        </TabList>
        <TabPanels className="w-full  h-full">
          {projects.map((project) => (
            <TabPanel
              key={project.id}
              className="rounded-xl bg-white/10 p-3 md:ml-3 md:h-full"
            >
              <ProjectCard project={project} />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </Section>
  );
}
