/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Navigation, Scrollbar, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperCardSlide } from "./SwiperCardSlide";

export const SwiperCard = ({ swiperCard, jacket }) => {

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Keyboard]}
      spaceBetween={45}
      slidesPerView={3}
      navigation
      keyboard={{ enabled: true, onlyInViewport: false }}
      scrollbar={{ hide: false, dragSize: 365 }}
      className="swiper-card"
      breakpoints={{
        767: {
          slidesPerView: 3,
          spaceBetween: 40,
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            dragSize: 300,
          },
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            dragSize: 300,
          },
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            dragSize: 100,
          },
        },
      }}
    >
      {swiperCard.map((slide, id) => (
        <SwiperSlide key={id}>
          <SwiperCardSlide slide={slide} jacket={jacket} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
