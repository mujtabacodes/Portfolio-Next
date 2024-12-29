'use client';

import { ISkillCard } from '@/types/types';
import React, { memo } from 'react';
import Link from 'next/link';

interface ISkillCardWithHover extends ISkillCard {
  title?: string;
  link?: string; // Optional link prop
}

const SkillCard = ({
  children,
  className,
  title,
  link,
}: ISkillCardWithHover) => {
  return (
    <Link
      className={`relative bg-secondary rounded-lg p-3 shadow-lg shadow-boxShadow mb-6 hover:scale-105 hover:shadow-xl transition-transform duration-300 group ${className || ''}`}
      target={link ? '_blank' : undefined}
      href={link || '#'}
    >
      {title && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/50 to-black/70 dark:from-blue-300/40 dark:to-black/20 text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg text-lg font-semibold px-4 py-2">
          {title}
        </div>
      )}
      {children}
    </Link>
  );
};

export default memo(SkillCard);
