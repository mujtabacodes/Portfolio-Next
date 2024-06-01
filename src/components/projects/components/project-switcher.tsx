import { Text } from '@/styles/typos';
import { IProjectSwitcher } from '@/types/types';
import React from 'react';

export function ProjectSwitcher({
  children,
  className = '',
  onClick = () => {},
  active = false,
}: IProjectSwitcher) {
  return (
    <Text
      className={`cursor-pointer md:my-2 relative md:px-[1.8rem] min-w-[150px] ${className} ${active ? 'highlighted-text pl-[3rem]' : 'dim'}`}
      onClick={onClick}
    >
      {children}
      <span
        className={`hidden md:block absolute left-0 top-1/2 transform rounded-full rotate-90 w-2 ${active ? 'highlighted-text bg-[#00dee4]' : 'w-2 dim bg-slate-600 opacity-65 dark:bg-slate-500 dark:opacity-100 h-4/5'} -translate-y-1/2 h-full`}
      ></span>
    </Text>
  );
}
