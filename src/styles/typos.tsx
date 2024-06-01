import { ITypo } from '@/types/types';
import React from 'react';
import { Monomaniac_One, Baloo_Bhai_2, Kalam } from 'next/font/google';
const desc = Monomaniac_One({
  weight: '400',
  subsets: ['latin-ext'],
});
const heading = Baloo_Bhai_2({
  weight: '800',
  subsets: ['latin'],
});
const title = Baloo_Bhai_2({
  weight: '700',
  subsets: ['latin'],
});
const subtitle = Kalam({
  weight: '400',
  subsets: ['latin'],
});

export function Desc({ children, className }: ITypo) {
  return (
    <div
      className={`text-md md:text-2xl 2xl:text-3xl ${className}  ${desc.className} text-justify`}
    >
      {children}
    </div>
  );
}

export function Heading({ children, className }: ITypo) {
  return (
    <div
      className={`text-4xl md:text-6xl 2xl:text-7xl ${className}  ${heading.className}`}
    >
      {children}
    </div>
  );
}
export function Title({ children, className }: ITypo) {
  return (
    <div
      className={`text-4xl md:text-6xl 2xl:text-7xl ${className}  ${title.className}`}
    >
      {children}
    </div>
  );
}
export function Subtitle({ children, className }: ITypo) {
  return (
    <div
      className={`text-md md:text-2xl 2xl:text-3xl ${className}  ${subtitle.className}`}
    >
      {children}
    </div>
  );
}
