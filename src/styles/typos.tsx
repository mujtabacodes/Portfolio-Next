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
      className={`text-md md:text-2xl 2xl:text-3xl ${className}  ${desc.className} text-justify dim`}
    >
      {children}
    </div>
  );
}

export function Heading({ children, className }: ITypo) {
  return (
    <div
      className={`text-4xl md:text-6xl 2xl:text-7xl ${className}  ${heading.className} uppercase`}
    >
      {children}
    </div>
  );
}
export function Title({ children, className }: ITypo) {
  return (
    <div
      className={`text-4xl md:text-5xl 2xl:text-6xl ${className}  ${title.className}`}
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
export function Text({ children, className, onClick }: ITypo) {
  return (
    <div
      className={`${className} text-sm md:text-1xl 2xl:text-2xl  font-bold`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
