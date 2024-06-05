import React from 'react';
import { Button } from '../ui/button';
import SocialLinks from '../socials';
import { Heading } from '@/styles/typos';
import { Row } from '@/styles/utils';

export function ContactUs() {
  return (
    <Row className="flex-col justify-center gap-5">
      <Heading className="text-center mb-4">Lets Work together</Heading>
      <Row className="gap-2 flex-col md:flex-row items-center justify-center">
        <Button variant="outlineStyled">Schedule 1:1 meeting</Button>
        <Button variant="primaryStyled">Message now</Button>
      </Row>
      <SocialLinks layout="row" />
    </Row>
  );
}
