import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IProjectCard } from '@/types/types';
import { Desc } from '@/styles/typos';

const ProjectCard = ({ project }: IProjectCard) => {
  const { id, name, description, image, github_url, live_url, techstack } =
    project;

  return (
    <Card className="dark:bg-transparent h-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Desc>{description}</Desc>
        {techstack.map((tech, index) => (
          <li key={index} className="text-sm/6 font-semibold text-white">
            {tech}
          </li>
        ))}
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
