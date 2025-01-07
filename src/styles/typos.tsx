import { ITypo } from '@/types/types';
import React from 'react';
import { Monomaniac_One, Baloo_Bhai_2, Kalam } from 'next/font/google';
const desc = Baloo_Bhai_2({
  weight: '400',
  subsets: ['latin-ext'],
});
export const heading = Baloo_Bhai_2({
  weight: '800',
  subsets: ['latin'],
});
export const title = Baloo_Bhai_2({
  weight: '700',
  subsets: ['latin'],
});
const p = Baloo_Bhai_2({
  weight: '400',
  subsets: ['latin'],
});
const subtitle = Kalam({
  weight: '400',
  subsets: ['latin'],
});

export function Desc({ children, className }: ITypo) {
  return (
    <div
      className={`text-md md:text-2xl 2xl:text-3xl ${className}  ${desc.className} text-justify text-primary`}
    >
      {children}
    </div>
  );
}

export function Heading({ children, className }: ITypo) {
  return (
    <div
      className={`text-4xl md:text-6xl 2xl:text-7xl ${className}  ${heading.className} text-primary`}
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

export const P = ({ children, className, onClick }: ITypo) => {
  return (
    <div
      className={`text-lg md:text-xl 2xl:text-2xl text-left  ${p.className} text-justify ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export const H1 = ({ children, className, onClick }: ITypo) => {
  return (
    <div
      className={`text-xl md:text-2xl 2xl:text-3xl ${className}  ${title.className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export const H3 = ({ children, className, onClick }: ITypo) => {
  return (
    <div
      className={`text-lg md:text-xl 2xl:text-2xl text-left ${className}  ${title.className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export const SubtitleH3 = ({ children, className, onClick }: ITypo) => {
  return (
    <div
      className={`text-sm md:text-md 2xl:text-lg ${className}  ${subtitle.className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const ButtonText = ({ children, className, onClick }: ITypo) => {
  return (
    <div
      className={`text-md md:text-lg 2xl:text-xl text-center ${className}  ${title.className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
