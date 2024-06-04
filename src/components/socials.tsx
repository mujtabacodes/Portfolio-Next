import { TSocialLink } from '@/types/types';
import { Github, Linkedin, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react';

const SocialLinks: React.FC<TSocialLink> = ({ layout, className }) => {
  const socialLinks = [
    {
      icon: <Github />,
      username: 'mujtabacodes',
      url: 'https://github.com/mujtabacodes',
    },
    {
      icon: <Linkedin />,
      username: 'mujtaba-shafique',
      url: 'https://linkedin.com/in/mujtaba-shafique',
    },
    {
      icon: <Instagram />,
      username: 'mujtaba.codes_',
      url: 'https://instagram.com/mujtaba.codes_',
    },
    {
      icon: <Twitter />,
      username: 'mujtabacodes',
      url: 'https://twitter.com/mujtabacodes',
    },
    {
      icon: <Mail />,
      username: 'mujtaba.shafique@outlook.com',
      url: 'mailto:mujtaba.shafique@outlook.com',
    },
  ];

  return (
    <div
      className={`flex flex-${layout} items-center justify-center  ${className}`}
    >
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className=" relative flex items-center p-2 rounded-full transition-all duration-300"
        >
          <span className="text-2xl border-2 border-primary rounded-full p-2 transition-all duration-300  border-spacing-7 hover:border-dashed hover:scale-125">
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
