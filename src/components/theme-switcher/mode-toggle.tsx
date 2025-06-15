'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  let currentTheme = theme;

  if (theme === 'system') {
    currentTheme =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  }

  return (
    <div className="cursor-pointer border p-1 rounded-full border-gray-300 dark:border-neutral-800 transition-all duration-1000">
      {currentTheme === 'light' ? (
        <MoonIcon
          height={24}
          width={24}
          onClick={() => setTheme('dark')}
          className="transition-transform duration-1000 hover:scale-110"
        />
      ) : (
        <SunIcon
          height={24}
          width={24}
          onClick={() => setTheme('light')}
          className="transition-transform duration-1000 hover:scale-110"
        />
      )}
    </div>
  );
}
