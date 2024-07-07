import { H3 } from '@/styles/typos';
import { ILinkTab } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const LinkTab = ({ image, title, icon }: ILinkTab) => {
  return (
    <React.Fragment>
      <Image
        src={image}
        alt={title}
        className="rounded-lg"
        width={50}
        height={50}
      />
      <div className="ml-4">
        <H3>
          {title} {icon}
        </H3>
      </div>
    </React.Fragment>
  );
};

export default LinkTab;
