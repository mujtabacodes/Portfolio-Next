import {
  Book,
  FileText,
  Github,
  Linkedin,
  SquareArrowOutUpRight,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
type TIcon = {
  iconOf: 'linkedIn' | 'gitHub' | 'documentation' | 'liveUrl';
  url: string;
};
const Icon = ({ iconOf, url }: TIcon) => {
  const renderIcon = () => {
    switch (iconOf) {
      case 'linkedIn':
        return <Linkedin />;
      case 'gitHub':
        return <Github />;
      case 'documentation':
        return <FileText />;
      case 'liveUrl':
        return <SquareArrowOutUpRight />;
      default:
        return null;
    }
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="icon-link bg-primary-foreground rounded-full p-2 hover:bg-primary"
    >
      {renderIcon()}
    </Link>
  );
};

export default Icon;
