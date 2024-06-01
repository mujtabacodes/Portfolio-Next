import { ReactNode } from 'react';

export interface ITypo {
  children: ReactNode;
  className?: string;
}

export interface ISectionHeader {
  heading: string;
  subTitle: string;
  align: 'left' | 'center' | 'right';
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image: string;
  live_url: string;
  github_url: string;
  techstack: string[];
}
export interface IProjectCard {
  project: {
    id: number;
    name: string;
    description: string;
    image: string;
    live_url: string;
    github_url: string;
    techstack: string[];
  };
}

export type TSocialLink = {
  layout: 'row' | 'col';
  className?: string;
};
