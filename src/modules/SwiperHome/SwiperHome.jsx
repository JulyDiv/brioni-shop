/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperHome = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Keyboard]}
      //wrapperClass="swiper-wrap"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      keyboard={{ enabled: true, onlyInViewport: false }}
      pagination={{ clickable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
      className="swiper"
      //className="swiper"
    >
        <SwiperSlide>
          <img
            src="/img/home-slider-1.png"
            alt="slide"
            className="swiper1-slide1__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/home-slider-2.png"
            alt="slide"
            className="swiper1-slide1__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/home-slider-3.png"
            alt="slide"
            className="swiper1-slide1__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/home-slider-4.png"
            alt="slide"
            className="swiper1-slide1__image"
          />
        </SwiperSlide>
    </Swiper>
  
  );
};