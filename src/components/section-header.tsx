import { Subtitle, Title } from '@/styles/typos';
import { ISectionHeader } from '@/types/types';
import React from 'react';

export function SectionHeader({ heading, subTitle, align }: ISectionHeader) {
  return (
    <div className={`flex flex-col items-end items-${align}`}>
      <Title>{heading}</Title>
      <Subtitle>{subTitle}</Subtitle>
    </div>
  );
}
