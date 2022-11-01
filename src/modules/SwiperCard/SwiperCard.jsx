/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Navigation, Scrollbar, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperCard = ({ swiperCard }) => {
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
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            dragSize: 300,
          },
        },
        840: {
          //   width: 640,
          slidesPerView: 1,
        },
        768: {
          //   width: 768,
          slidesPerView: 2,
        },
      }}
    >
      {swiperCard.map(({ id, name, price, img, like }) => (
        <SwiperSlide key={id} className="swiper-card__slide">
          <img src={img} className="swiper-card__image" alt="Image: Jacket" />
          <div className="swiper-card__select">
            <span className="swiper-card__text">{name}</span>
            <img src="img/select-catalog.svg" alt="Icon: select" />
          </div>
          <span className="swiper-card__price">{price}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
