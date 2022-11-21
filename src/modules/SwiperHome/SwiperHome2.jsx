/* eslint-disable @next/next/no-img-element */
import Swiper, { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

export const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Scrollbar, Autoplay],
  speed: 500,
  wrapperClass: "swiper-wrapper swiper-wrapper2",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   autoplay: {
  //     delay: 2500
  //   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

export const SwiperHome2 = () => {
    return (
      <div class="swiper">
        <div class="swiper-wrapper swiper-wrapper2">
          <div class="swiper-slide">
            <img src="/img/home-slider-1.png" alt="slide" />
          </div>
          <div class="swiper-slide">
            <img src="/img/home-slider-2.png" alt="slide" />
          </div>
          <div class="swiper-slide">
            <img src="/img/home-slider-3.png" alt="slide" />
          </div>
          <div class="swiper-slide">
            <img src="/img/home-slider-4.png" alt="slide" />
          </div>
        </div>

        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev swiper-button2-prev2"></div>
        <div class="swiper-button-next swiper-button2-next2"></div>

      </div>
    );
}