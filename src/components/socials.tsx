import { TSocialLink } from '@/types/types';
import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';
const SocialLinks: React.FC<TSocialLink> = ({ layout, className }) => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      username: 'mujtabacodes',
      url: 'https://github.com/mujtabacodes',
    },
    {
      icon: <FaLinkedin />,
      username: 'mujtaba-shafique',
      url: 'https://linkedin.com/in/mujtaba-shafique',
    },
    {
      icon: <FaInstagram />,
      username: 'mujtaba.codes_',
      url: 'https://instagram.com/mujtaba.codes_',
    },
    {
      icon: <BsTwitterX />,
      username: 'mujtabacodes',
      url: 'https://twitter.com/mujtabacodes',
    },
    {
      icon: <MdOutlineEmail />,
      username: 'mujtaba.shafique@outlook.com',
      url: 'mailto:mujtaba.shafique@outlook.com',
    },
  ];

  return (
    <div
      className={`flex flex-${layout} items-center justify-center  ${className}`}
      data-aos="flip-down"
    >
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className=" relative flex items-center p-2 rounded-full transition-all duration-300"
        >
          <span className="text-2xl border-2 border-primary-foreground text-primary-foreground dark:text-primary dark:border-primary rounded-full p-2 transition-all duration-300  border-spacing-7 hover:border-dashed hover:scale-125">
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
