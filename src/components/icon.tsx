import { H3 } from '@/styles/typos';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { Button } from './ui/button';
type TIcon = {
  iconOf: 'linkedIn' | 'gitHub' | 'documentation' | 'liveUrl';
  url: string;
};
const Icon = ({ iconOf, url }: TIcon) => {
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
    <Button size="sm" variant="primaryStyled" className="bg-heightlightColor">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 justify-center items-center "
      >
        {renderIcon()}
        {iconOf === 'liveUrl' && <H3>Live URL</H3>}
      </Link>
    </Button>
  );
};

export default Icon;
