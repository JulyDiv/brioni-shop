/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Scrollbar, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperCardMobile = ({ choice, jacket }) => {
  return (
    <Swiper
      modules={[Scrollbar, A11y, Keyboard]}
      slidesPerView={1}
      navigation
      keyboard={{ enabled: true, onlyInViewport: false }}
      scrollbar={{ hide: false, dragSize: 100 }}
      className="swiper-mobile"
    >
      {jacket.choice.map((item, id) => (
        <SwiperSlide key={id} className="swiper-mobile__slide">
          <img
            src={item}
            className="swiper-mobile__image"
            alt="Image: Jacket"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
