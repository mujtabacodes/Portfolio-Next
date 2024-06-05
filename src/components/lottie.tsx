'use client';
import { ILottie } from '@/types/types';
import React from 'react';
import Animation from 'react-lottie';

export default function Lottie({ data, length, width }: ILottie) {
  const defaultOptions = {
    // loop: false,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Animation options={defaultOptions} height={length} width={width} />;
}
