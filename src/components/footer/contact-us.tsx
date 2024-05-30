import React from "react";
import { Button } from "../ui/button";
import SocialLinks from "../header/components/socials";

export const ContactUs = () => {
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
};
