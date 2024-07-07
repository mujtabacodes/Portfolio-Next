import React from 'react';
import profile from '@images/profile.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { H1 } from '@/styles/typos';
import { links, findMeLinks } from '@config/index';
import LinkTab from '@/components/link-tab';
const Links = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-primary my-2">
      <div className="text-center">
        <Image
          src={profile}
          alt="Profile"
          className="rounded-full mx-auto"
          width={100}
          height={100}
        />
        <H1>@mujtaba.codes_</H1>
      </div>
      <div className="mt-8 w-full max-w-md">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex items-center p-4 mb-4 bg-secondary rounded-lg shadow-lg hover:scale-105 "
            target="_blank"
          >
            <LinkTab image={link.image} title={link.title} icon={link.icon} />
          </Link>
        ))}
      </div>
      <div className="mt-8 w-full max-w-md text-center">
        <H1 className="text-center">Find me</H1>
        {findMeLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex items-center p-4 mb-4 bg-secondary rounded-lg shadow-lg hover:scale-105"
            target="_blank"
          >
            <LinkTab image={link.image} title={link.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
