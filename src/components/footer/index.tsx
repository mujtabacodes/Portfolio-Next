import React from 'react';
import { ContactUs } from './contact-us';
import { Section } from '@/styles/utils';
import { SubtitleH3 } from '@/styles/typos';
import heart from '@assets/lotties/heart.json';
import coffee from '@/assets/lotties/coffee2.json';
import Lottie from '../lottie';

export function Footer() {
  return (
    <div
      id="contact"
      className="flex flex-col justify-between items-center w-full md:mt-[15rem] gap-28"
    >
      <ContactUs />
      <SubtitleH3>
        <em className="flex items-center justify-center">
          Created with
          <Lottie data={heart} length={50} width={50} />
          and coffee
          <div className="pb-4">
            <Lottie data={coffee} length={50} width={50} />
          </div>
          ....
        </em>
      </SubtitleH3>
    </div>
  );
}
