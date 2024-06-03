import { H3 } from '@/styles/typos';
import { ITechStack } from '@/types/types';
import React from 'react';

const TechStack = ({ key, children, className }: ITechStack) => {
  return (
    <H3
      key={key}
      className={`${className} bg-secondary-foreground px-2 py-1 rounded-md text-sm text-center`}
    >
      #{children}
    </H3>
  );
};

export default TechStack;
