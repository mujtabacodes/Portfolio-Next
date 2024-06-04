import React from 'react';
import { ContactUs } from './contact-us';
import { Section } from '@/styles/utils';
import { SubtitleH3 } from '@/styles/typos';

export function Footer() {
  return (
    <Section
      id="contact"
      className="flex flex-col justify-between items-center w-full !min-h-[50vh]"
    >
      <ContactUs />
      <SubtitleH3>
        All right reserverd 2024 <em>Created with ❤️ and coffee☕....</em>
      </SubtitleH3>
    </Section>
  );
}
