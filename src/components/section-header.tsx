import { Subtitle, Title } from '@/styles/typos';
import { ISectionHeader } from '@/types/types';
import React from 'react';

export function SectionHeader({ heading, subTitle, align }: ISectionHeader) {
  return (
    <div className={`flex flex-col items-${align} py-3`}>
      <Title className={`text-${align} `}>{heading}</Title>
      <Subtitle className={`text-${align == 'end' ? 'right' : align} `}>
        {subTitle}
      </Subtitle>
    </div>
  );
}
