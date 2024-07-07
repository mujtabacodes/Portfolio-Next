import { H3 } from '@/styles/typos';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { Button } from './ui/button';
type TIcon = {
  iconOf: 'linkedIn' | 'gitHub' | 'documentation' | 'liveUrl';
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
      className={`flex gap-1 justify-center items-center text-secondary  ${iconOf === 'liveUrl' ? 'bg-transparent' : 'bg-black/60 dark:bg-primary'} px-2 rounded-full hover:opacity-90 ${className}`}
    >
      {iconOf === 'liveUrl' ? (
        <Button
          size="sm"
          variant="primaryStyled"
          className="px-3 py-1 flex gap-2"
        >
          {renderIcon()}
          <H3>Live URL</H3>
        </Button>
      ) : (
        <>{renderIcon()}</>
      )}
    </Link>
  );
};

export default Icon;
