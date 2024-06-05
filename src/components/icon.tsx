import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
type TIcon = {
  iconOf: 'linkedIn' | 'gitHub' | 'documentation' | 'liveUrl';
  url: string;
};
const Icon = ({ iconOf, url }: TIcon) => {
  const renderIcon = () => {
    switch (iconOf) {
      case 'linkedIn':
        return <FaLinkedin />;
      case 'gitHub':
        return <FaGithub />;
      case 'documentation':
        return <IoDocumentText />;
      case 'liveUrl':
        return <FaExternalLinkAlt />;
      default:
        return null;
    }
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="icon-link bg-slate-200 dark:bg-primary-foreground rounded-full p-2  hover:scale-105"
    >
      {renderIcon()}
    </Link>
  );
};

export default Icon;
