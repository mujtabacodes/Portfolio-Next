import { H3, SubtitleH3 } from '@/styles/typos';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { Button } from './ui/button';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

type TIcon = {
  iconOf: 'linkedIn' | 'gitHub' | 'documentation' | 'liveUrl' | 'youtube';
  url: string;
  className?: string;
};

const Icon = ({ iconOf, url, className }: TIcon) => {
  const renderIcon = () => {
    switch (iconOf) {
      case 'linkedIn':
        return <FaLinkedin className="text-lg" />;
      case 'gitHub':
        return <FaGithub className="text-lg" />;
      case 'documentation':
        return <IoDocumentText className="text-lg" />;
      case 'youtube':
        return <TbBrandYoutubeFilled className="text-lg" />;
      case 'liveUrl':
        return <FaExternalLinkAlt className="text-[1rem]" />;
      default:
        return null;
    }
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center text-secondary ${className}`}
    >
      <div className="relative flex items-center  gap-1 px-2 hover:px-4 py-2 w-8 h-8 hover:w-fit  rounded-full bg-primary transition-all duration-500 ease-in-out group">
        <div className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2">
          {renderIcon()}
        </div>

        <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
          <h1 className="text-sm md:text-base font-medium font-sans">
            {iconOf === 'liveUrl'
              ? 'Live URL'
              : iconOf === 'gitHub'
                ? 'Code Review'
                : iconOf === 'youtube'
                  ? 'Demo Video '
                  : iconOf}
          </h1>
        </span>
      </div>
    </Link>
  );
};

export default Icon;
