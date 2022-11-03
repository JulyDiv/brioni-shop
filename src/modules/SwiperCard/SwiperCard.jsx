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
      {swiperCard.map(({ id, name, price, img, like }) => (
        <SwiperSlide key={id} className="swiper-card__slide">
          <img src={img} className="swiper-card__image" alt="Image: Jacket" />
          <div className="swiper-card__select">
            <span className="swiper-card__text">{name}</span>
            <img
              src="/img/select-catalog.svg"
              className="swiper-card__icon"
              alt="Icon: select"
            />
          </div>
          <span className="swiper-card__price">{price}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
