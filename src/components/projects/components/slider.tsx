'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import projects from '@config/project.json';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import ProjectCard from './project-card';

export default function Slider() {
  return (
    <Swiper
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="project-swiper"
    >
      <div
        slot="container-start"
        className="parallax-bg hidden md:block"
        style={{
          backgroundImage:
            'url(https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?resize=1200%2C630)',
        }}
        data-swiper-parallax="-23%"
      ></div>
      {projects.map((project) => (
        <SwiperSlide key={project.id} className="flex md:self-center gap-1">
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
