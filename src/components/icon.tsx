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

  const getBackgroundColor = () => {
    switch (iconOf) {
      case 'linkedIn':
        return 'bg-[#0072b1] hover:ring-[#0073b19a]'; // LinkedIn blue
      case 'gitHub':
        return 'bg-gray-800 hover:ring-gray-600/60'; // GitHub dark
      case 'documentation':
        return 'bg-indigo-600 hover:ring-indigo-300/60'; // A documentation-friendly blue-ish purple
      case 'youtube':
        return 'bg-red-600 hover:ring-red-300/60'; // YouTube red
      case 'liveUrl':
        return 'bg-[#020817] hover:ring-[#02081783]'; // Green for live URL
      default:
        return 'bg-gray-500 hover:ring-gray-300/60'; // Default gray
    }
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center text-secondary ${className}`}
    >
      <div
        className={`relative flex items-center gap-1 px-2 hover:px-4 py-2 w-8 h-8 hover:w-fit rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-in-out group ring-0 hover:ring-2 hover:scale-5 ${getBackgroundColor()}`}
      >
        <div className="transition-transform duration-300 ease-in-out group-hover:-translate-x-2 text-white">
          {renderIcon()}
        </div>

        <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
          <h1 className="text-sm md:text-base font-medium font-sans text-white drop-shadow">
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
