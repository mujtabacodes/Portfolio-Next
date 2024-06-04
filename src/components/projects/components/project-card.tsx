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
import { Desc, H1, H3, P } from '@/styles/typos';
import Image from 'next/image';
import TechStack from './techstack';
import Icon from '../../icon';

const ProjectCard = ({ project }: IProjectCard) => {
  const { id, name, description, image, github_url, live_url, techstack } =
    project;

  return (
    <div className="flex flex-col md:flex-row h-full">
      <Image
        src={image}
        width={500}
        height={100}
        alt={name}
        className="w-full rounded-md md:w-1/2 h-auto md:h-full object-cover rounded-b-none md:rounded-md md:rounded-r-none"
      />
      <Card className="flex-1 justify-between bg-secondary h-full  overflow-hidden rounded-t-none md:rounded-md md:rounded-l-none">
        <CardHeader>
          <H3 className="text-heightlightColor">Card Description</H3>
          <H1>{name}</H1>
        </CardHeader>
        <CardContent className="overflow-auto max-h-[calc(100%-8rem)] p-4 ">
          <P>{description}</P>
          <H3 className="flex flex-wrap gap-1">
            Tech Stack:
            {techstack.map((tech, index) => (
              <TechStack key={index} className="flex-shrink-0">
                {tech}
              </TechStack>
            ))}
          </H3>
        </CardContent>
        <CardFooter className="flex gap-1">
          <Icon iconOf="gitHub" url={github_url} />
          <Icon iconOf="liveUrl" url={live_url} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
