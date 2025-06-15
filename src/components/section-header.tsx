import { Subtitle, Title } from '@/styles/typos';
import { ISectionHeader } from '@/types/types';
import React from 'react';

export function SectionHeader({
  Icon,
  heading,
  subTitle,
  align,
}: ISectionHeader) {
  return (
    <div className={`flex flex-col items-${align} py-3`}>
      <div className="flex gap-2">
        {Icon && Icon}
        <Title className={`text-${align} `}>{heading}</Title>
      </div>
      <Subtitle className={`text-${align == 'end' ? 'right' : align} `}>
        {subTitle}
      </Subtitle>
    </div>
  );
}
