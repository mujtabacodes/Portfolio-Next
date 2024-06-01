'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SectionHeader } from '../section-header';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import BoyAvator from '.';
import GirlAvator from '.';
import rachaAdel from '.';
import bassi from '.';
import jef from '.';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { LinkedinIcon } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  avator: string;
  name: string;
  comment: string;
}

interface ReduxTestimonial {
  _id: string;
  selectedFile: string;
  clientname: string;
  clientcomment: string;
}

const FixedData: Testimonial[] = [
  {
    id: 1,
    avator: GirlAvator,
    name: 'Shaina',
    comment: 'Mujtaba has been great...',
  },
  {
    id: 2,
    avator: rachaAdel,
    name: 'Racha Adel',
    comment: 'Excellent. Such a pleasure...',
  },
  {
    id: 3,
    avator: bassi,
    name: 'Bassi',
    comment: 'Mujtaba is an incredible developer...',
  },
  {
    id: 4,
    avator: BoyAvator,
    name: 'Letlotlompete',
    comment: 'The service was seamless...',
  },
  {
    id: 5,
    avator: jef,
    name: 'Jefowles',
    comment: 'Polite and easy to communicate with.',
  },
];

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-8">
    <SectionHeader
      heading="Testimonails"
      subTitle="Something which matters"
      align="left"
    />
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ dynamicBullets: true, clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      className="container mx-auto px-4"
    >
      {FixedData.map(({ id, avator, name, comment }) => (
        <SwiperSlide key={id} className="rounded-full text-center">
          <Card>
            <CardHeader>
              <Image src={avator} alt={name} />
              <CardTitle>{name}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{comment}</p>
            </CardContent>
            <CardFooter>
              <LinkedinIcon />
            </CardFooter>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonials;
