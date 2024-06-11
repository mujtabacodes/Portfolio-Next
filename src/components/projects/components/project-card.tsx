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
  const {
    id,
    name,
    description,
    image,
    github_url,
    live_url,
    techstack,
    project_type,
  } = project;

  return (
    <div data-aos="flip-right" className="flex flex-col md:flex-row h-full">
      <Image
        src={image}
        width={500}
        height={100}
        alt={name}
        className="w-full rounded-md md:w-1/2 h-auto md:h-full object-cover hover:shadow-inner hover:cursor-pointer"
      />
      <Card className="flex-1 justify-between  h-full shadow-none overflow-hidden border-0 ">
        <CardHeader className="pb-0">
          <H3 className="text-heightlightColor">{project_type}</H3>
          <H1>{name}</H1>
        </CardHeader>
        <CardContent className="overflow-auto max-h-[calc(100%-8rem)] p-4 ">
          <P className="text-primary-foreground">{description}</P>
        </CardContent>
        <CardFooter className="flex gap-1 flex-col items-start h-auto justify-between">
          <H3 className="flex flex-wrap items-center gap-2 text-primary ">
            Tech Stack:
            {techstack.map((tech, index) => (
              <TechStack key={index} className="flex-shrink-0">
                {tech}
              </TechStack>
            ))}
          </H3>
          <div className="flex gap-2 mt-3 w-full justify-end">
            {github_url ? <Icon iconOf="gitHub" url={github_url} /> : null}
            {live_url ? <Icon iconOf="liveUrl" url={live_url} /> : null}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
