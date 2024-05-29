import { SectionHeader } from '../section-header'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import BoyAvator from "./";
import GirlAvator from "../../assets/images/girl-profile.webp";
import rachaAdel from "../../assets/images/racha-adel.webp";
import bassi from "../../assets/images/bassi.webp";
import jef from "../../assets/images/jef.webp";

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
  { id: 1, avator: GirlAvator, name: "Shaina", comment: "Mujtaba has been great..." },
  { id: 2, avator: rachaAdel, name: "Racha Adel", comment: "Excellent. Such a pleasure..." },
  { id: 3, avator: bassi, name: "Bassi", comment: "Mujtaba is an incredible developer..." },
  { id: 4, avator: BoyAvator, name: "Letlotlompete", comment: "The service was seamless..." },
  { id: 5, avator: jef, name: "Jefowles", comment: "Polite and easy to communicate with." },
];

const Testimonials: React.FC = () => {
  const testimonialData = useSelector((state: any) => state.testimonial as ReduxTestimonial[]);

  return (
    <section id="testimonials" className="py-8">
      <SectionHeader heading='Testimonails' subTitle='Something which matters' align='left'/>
      <h5 className="text-center text-gray-400">Review from clients</h5>
      <h2 className="text-center text-4xl mb-8">Testimonials</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className="container mx-auto px-4"
      >
        {FixedData.map(({ id, avator, name, comment }) => (
          <SwiperSlide key={id} className="bg-gray-800 text-white p-8 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img src={avator} alt={name} className="rounded-full border-4 border-primary-variant" />
            </div>
            <h5 className="text-lg">{name}</h5>
            <small className="block text-gray-300 mt-2">{comment}</small>
          </SwiperSlide>
        ))}
        {testimonialData.map(({ _id, selectedFile, clientname, clientcomment }) => (
          <SwiperSlide key={_id} className="bg-gray-800 text-white p-8 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img src={selectedFile} alt={clientname} className="rounded-full border-4 border-primary-variant" />
            </div>
            <h5 className="text-lg">{clientname}</h5>
            <small className="block text-gray-300 mt-2">{clientcomment}</small>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden sm:block mt-8">
        <TestimonialLottie />
      </div>
    </section>
  );
};

export default Testimonials;
