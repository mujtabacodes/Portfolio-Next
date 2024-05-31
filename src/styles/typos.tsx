import { ITypo } from '@/types/types';
import React from 'react';

export function T24({ children, className }: ITypo) {
  return <div className={`text-md ${className} font-play`}>{children}</div>;
}
export function Heading({ children, className }: ITypo) {
  return <div className={`text-[48px] ${className} font-play`}>{children}</div>;
}
