/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Scrollbar, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dbCatalog from "../../DBCatalog";

export const SwiperCardMobile = () => {
  const [swiperCardMobile, setSwiperCardMobile] = useState(dbCatalog);
  return (
    <Swiper
      modules={[Scrollbar, A11y, Keyboard]}
    //   spaceBetween={45}
      slidesPerView={1}
      navigation
      keyboard={{ enabled: true, onlyInViewport: false }}
      scrollbar={{ hide: false, dragSize: 100 }}
      className="swiper-mobile"
      breakpoints={{
        // 767: {
        //   slidesPerView: 3,
        //   spaceBetween: 40,
        //   scrollbar: {
        //     el: ".swiper-scrollbar",
        //     hide: false,
        //     dragSize: 300,
        //   },
        // },
        // 480: {
        //   slidesPerView: 2,
        //   spaceBetween: 30,
        //   scrollbar: {
        //     el: ".swiper-scrollbar",
        //     hide: false,
        //     dragSize: 300,
        //   },
        // },
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 10,
        //   scrollbar: {
        //     el: ".swiper-scrollbar",
        //     hide: false,
        //     dragSize: 100,
        //   },
        // },
      }}
    >
      {swiperCardMobile.map(({ id, img }) => (
        <SwiperSlide key={id} className="swiper-mobile__slide">
          <img src={img} className="swiper-mobile__image" alt="Image: Jacket" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
