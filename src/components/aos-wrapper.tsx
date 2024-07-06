'use client';
import React, { useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IAOSWrapper } from '@/types/types';

const AOSWrapper: React.FC<IAOSWrapper> = ({
  children,
  animationType = 'fade-up',
}) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    });
  }, []);

  return <div data-aos={animationType}>{children}</div>;
};

export default AOSWrapper;
