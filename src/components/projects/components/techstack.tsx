import { H3, P } from '@/styles/typos';
import { ITechStack } from '@/types/types';
import React from 'react';

const TechStack = ({ children, className }: ITechStack) => {
  return (
    <P
      className={`${className} bg-secondary-foreground px-1 py-[0.1rem] rounded-md text-sm text-center`}
    >
      #{children}
    </P>
  );
};

export default TechStack;
