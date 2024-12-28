'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export const Logo: React.FC = () => {
  const { theme, resolvedTheme } = useTheme(); // resolvedTheme gives the effective theme
  const [currentTheme, setCurrentTheme] = useState(resolvedTheme);

  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => window.scrollTo(0, 0)}
    >
      {currentTheme === 'dark' ? (
        <Image
          src="/darkLogo.png"
          alt="Logo Dark Theme"
          className="h-8 w-auto"
          width={100}
          height={100}
        />
      ) : (
        <Image
          src="/lightLogo.png"
          alt="Logo Light Theme"
          className="h-8 w-auto"
          width={100}
          height={100}
        />
      )}
    </div>
  );
};
