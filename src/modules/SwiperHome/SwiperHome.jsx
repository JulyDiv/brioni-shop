/* eslint-disable @next/next/no-img-element */
import React from "react";
import Swiper, { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { useEffect } from "react";

export const SwiperHome = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper2", {
      modules: [Navigation, Pagination, Scrollbar, Autoplay],
      speed: 500,
      wrapperClass: "swiper-wrapper swiper2-wrapper2",
      navigation: {
        nextEl: ".swiper2-button2-next2",
        prevEl: ".swiper2-button2-prev2",
      },
        autoplay: {
          delay: 2500,
        },
      pagination: {
        el: ".swiper2-pagination2",
        clickable: true,
      },
    });
  }, []);
  return (
    <div className="swiper swiper2">
      <div className="swiper-wrapper swiper2-wrapper2">
        <div className="swiper-slide">
          <img src="/img/home-slider-1.png" alt="slide" />
        </div>
        <div className="swiper-slide">
          <img src="/img/home-slider-2.png" alt="slide" />
        </div>
        <div className="swiper-slide">
          <img src="/img/home-slider-3.png" alt="slide" />
        </div>
        <div className="swiper-slide">
          <img src="/img/home-slider-4.png" alt="slide" />
        </div>
      </div>

      <div className="swiper-pagination swiper2-pagination2"></div>

      <div className="swiper-button-prev swiper2-button2-prev2"></div>
      <div className="swiper-button-next swiper2-button2-next2"></div>
    </div>
  );
};
