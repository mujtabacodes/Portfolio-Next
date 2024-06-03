import { ReactNode } from 'react';

export interface ITypo {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface ISectionHeader {
  heading: string;
  subTitle: string;
  align: 'start' | 'center' | 'end';
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

export interface ISection {
  children: ReactNode;
  className?: string;
}

export interface IProjectSwitcher {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface ITechStack {
  children: React.ReactNode;
  className?: string;
  key: number;
}
