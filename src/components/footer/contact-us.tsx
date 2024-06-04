import React from 'react';
import { Button } from '../ui/button';
import SocialLinks from '../socials';

export function ContactUs() {
  return (
    <div>
      <h1>Lets Work together</h1>
      <div>
        <Button variant="outline">Schedule 1:1 meeting</Button>
        <Button>Message now</Button>
      </div>
      <SocialLinks layout="row" />
    </div>
  );
}
