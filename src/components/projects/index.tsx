'use client';
import React, { useState } from 'react';
import { SectionHeader } from '../section-header';
import ProjectCard from './components/project-card';
import { IProject } from '@/types/types';

// Sample projects data
const projects: IProject[] = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Description of Project 1',
    image:
      '/uploads/portfolio/1716891719604_wallpapersden.com_small-memory_1920x1080.jpg',
    live_url: 'https://example.com/project1',
    github_url: 'https://github.com/project1',
    techstack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Description of Project 2',
    image:
      '/uploads/portfolio/1716891719604_wallpapersden.com_small-memory_1920x1080.jpg',
    live_url: 'https://example.com/project2',
    github_url: 'https://github.com/project2',
    techstack: ['Angular', 'Express', 'MySQL'],
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'Description of Project 3',
    image:
      '/uploads/portfolio/1716891719604_wallpapersden.com_small-memory_1920x1080.jpg',
    live_url: 'https://example.com/project3',
    github_url: 'https://github.com/project3',
    techstack: ['Vue.js', 'Firebase', 'PostgreSQL'],
  },
  {
    id: 4,
    name: 'Project 4',
    description: 'Description of Project 4',
    image:
      '/uploads/portfolio/1716891719604_wallpapersden.com_small-memory_1920x1080.jpg',
    live_url: 'https://example.com/project4',
    github_url: 'https://github.com/project4',
    techstack: ['Svelte', 'Django', 'SQLite'],
  },
  // Add more projects as needed
];

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState<number>(2); // Default to the first project

  const handleProjectClick = (id: number) => {
    setActiveProjectId(id); // Set the clicked project as active
  };

  return (
    <div className="py-8">
      <SectionHeader
        heading="Projects"
        subTitle="Featured Work and Project Showcase"
        align="left"
      />

      <div className="flex justify-between">
        <div className="flex flex-col">
          {projects.map((project) => (
            <h1
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className={`cursor-pointer ${activeProjectId === project.id ? 'text-blue-500' : 'text-gray-900'}`}
            >
              {project.name}
            </h1>
          ))}
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          {projects
            .filter((project) => project.id === activeProjectId)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
