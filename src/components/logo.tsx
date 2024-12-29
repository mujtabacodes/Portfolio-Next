'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export const Logo: React.FC = () => {
  const { resolvedTheme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    setCurrentTheme(resolvedTheme || systemTheme);
  }, [resolvedTheme, systemTheme]);

  if (!currentTheme) return null;

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
          priority
        />
      ) : (
        <Image
          src="/lightLogo.png"
          alt="Logo Light Theme"
          className="h-8 w-auto"
          width={100}
          height={100}
          priority
        />
      )}
    </div>
  );
};
