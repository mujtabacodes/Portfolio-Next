import { IT24 } from '@/types/types';
import React from 'react';


export const T24 = ({ children,className }:IT24) => {
  return <div className={`text-[24px] ${className}`}>{children}</div>;
};
