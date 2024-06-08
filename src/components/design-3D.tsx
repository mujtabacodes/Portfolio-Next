'use client';

import Image from 'next/image';

import Spline from '@splinetool/react-spline';
import { memo } from 'react';
import dynamic from 'next/dynamic';

const Design3D = () => {
  return (
    <Spline scene="https://prod.spline.design/iVeqrcLm6IxMhWvr/scene.splinecode" />
  );
};
export default memo(Design3D);
