'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SectionHeader } from '../section-header';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import testimonials from '@config/testimonials.json';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Image from 'next/image';
import { Section } from '@/styles/utils';
import Icon from '../icon';
import { H3, SubtitleH3 } from '@/styles/typos';

const Testimonials: React.FC = () => (
  <Section id="testimonials">
    <SectionHeader
      heading="Testimonails"
      subTitle="Something which matters"
      align="center"
    />
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ dynamicBullets: true, clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {testimonials.map(({ id, avator, name, comment, url }) => (
        <SwiperSlide key={id} className="rounded-full text-center px-5 pb-2">
          <Card className="border-none w-full shadow-lg shadow-boxShadow ">
            <CardHeader>
              <div className="flex items-center justify-center">
                <Image
                  width={50}
                  height={50}
                  className="object-cover rounded-full shadow-md hover:shadow-xl"
                  src={avator}
                  alt={name}
                />
              </div>
              <H3 className="text-center">{name}</H3>
            </CardHeader>
            <CardContent>
              <SubtitleH3>{comment}</SubtitleH3>
            </CardContent>
            <CardFooter>
              {url && <Icon iconOf="linkedIn" url={url} className="p-2" />}
            </CardFooter>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  </Section>
);

export default Testimonials;
