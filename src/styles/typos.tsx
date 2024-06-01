import { ITypo } from '@/types/types';
import React from 'react';
import { Monomaniac_One } from 'next/font/google';
const desc = Monomaniac_One({
  weight: '400',
  subsets: ['latin-ext'],
});

export function Desc({ children, className }: ITypo) {
  return (
    <div className={`text-md ${className}  ${desc.className} font-play`}>
      {children}
    </div>
  );
}
export function Heading({ children, className }: ITypo) {
  return <div className={`text-[48px] ${className} font-play`}>{children}</div>;
}
