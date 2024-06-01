import { ITypo } from '@/types/types';
import React from 'react';
import { Monomaniac_One, Baloo_Bhai_2 } from 'next/font/google';
const desc = Monomaniac_One({
  weight: '400',
  subsets: ['latin-ext'],
});
const heading = Baloo_Bhai_2({
  weight: '800',
  subsets: ['latin'],
});

export function Desc({ children, className }: ITypo) {
  return (
    <div
      className={`text-md md:text-xl ${className}  ${desc.className} text-justify`}
    >
      {children}
    </div>
  );
}
export function Heading({ children, className }: ITypo) {
  return (
    <div
      className={`text-4xl md:text-[48px] ${className}  ${heading.className}`}
    >
      {children}
    </div>
  );
}
