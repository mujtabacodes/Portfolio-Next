import { IProjectCard } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ project }: IProjectCard) => {
  const { name, description, live_url, github_url, techstack, image } = project;

  return (
    <a
      href="#"
      className="project-card flex flex-col items-center bg-white rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <Image
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={image}
        alt=""
        width={100}
        height={100}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="text-sm">
          <p>
            <span className="font-semibold">Live URL:</span>
            <a href={live_url} className="text-blue-500 hover:underline">
              {live_url}
            </a>
          </p>
          <p>
            <span className="font-semibold">GitHub URL:</span>
            <a href={github_url} className="text-blue-500 hover:underline">
              {github_url}
            </a>
          </p>
          <p>
            <span className="font-semibold">Tech Stack:</span> {techstack.join(', ')}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
