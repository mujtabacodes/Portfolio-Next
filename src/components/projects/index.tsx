'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../section-header';
import ProjectCard from './components/project-card';
import { Section } from '@/styles/utils';
import projects from '@config/project.json';
import { Text } from '@/styles/typos';
import { ProjectSwitcher } from './components/project-switcher';
// Sample projects data

function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<number>(2);

  const handleProjectClick = (id: number) => {
    setActiveProjectId(id);
  };

  return (
    <Section>
      <SectionHeader
        heading="Projects"
        subTitle="Featured Work and Project Showcase"
        align="start"
      />

      <div className="flex justify-between">
        <div className="flex flex-row md:flex-col max-h-[60vh] overflow-x-auto md:overflow-y-auto">
          {projects.map((project) => (
            <ProjectSwitcher
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              active={activeProjectId === project.id}
            >
              {project.name}
            </ProjectSwitcher>
          ))}
        </div>
        <div className="bg-red-400 flex-grow mt-10 md:mt-0">
          {projects
            .filter((project) => project.id === activeProjectId)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </Section>
  );
}

export default Projects;
