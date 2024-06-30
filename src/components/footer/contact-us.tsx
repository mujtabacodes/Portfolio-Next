import React from 'react';
import { Button } from '../ui/button';
import SocialLinks from '../socials';
import { ButtonText, Heading } from '@/styles/typos';
import { Row } from '@/styles/utils';
import Link from 'next/link';
import { RiWhatsappFill } from 'react-icons/ri';

export function ContactUs() {
  return (
    <Row className="flex-col justify-center gap-5">
      <Heading className="text-center mb-4">Lets Work together</Heading>
      <Row className="gap-2 flex-col md:flex-row items-center justify-center">
        <Button variant="outlineStyled" size="lg">
          <Link href="https://calendly.com/mujtaba-shafique" target="_blank">
            <ButtonText>Schedule 1:1 meeting</ButtonText>
          </Link>
        </Button>
        <Button variant="primaryStyled" size="lg">
          <Link href="https://wa.me/+923295024550" target="_blank">
            <ButtonText className="flex gap-2 items-center justify-center">
              <RiWhatsappFill className="text-white" /> Message now
            </ButtonText>
          </Link>
        </Button>
      </Row>
      <SocialLinks layout="row" />
    </Row>
  );
}
