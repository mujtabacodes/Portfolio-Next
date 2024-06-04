import { H3, P } from '@/styles/typos';
import { ITechStack } from '@/types/types';
import React from 'react';

const TechStack = ({ key, children, className }: ITechStack) => {
  return (
    <P
      key={key}
      className={`${className} bg-secondary-foreground px-2 py-1 rounded-md !text-primary text-sm text-center`}
    >
      #{children}
    </P>
  );
};

export default TechStack;
