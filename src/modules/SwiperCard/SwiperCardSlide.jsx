/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import { SwiperSlide } from "swiper/react";
import { AppContext } from "../../context/AppContext";

export const SwiperCardSlide = ({ slide, jacket }) => {
  const { count, selects, setSelects } = useContext(AppContext);
  const [activeSelect, setActiveSelect] = useState(false);
    const select = {
      ...selects,
      ...jacket
      //count: count.count,
    };
  const addSelect = () => {
    const list = new Map(selects);
    if (list.get(slide.id)) {
      list.set(slide.id, {
        ...jacket,
        ...slide,
        count: count.count,
      });
    } else {
      list.set(slide.id, select);
    }
    setSelects(list);
    //console.log(list);
    //console.log(jacket);
    setActiveSelect(true);
    activeSelect ? setActiveSelect(false) : setActiveSelect(true);
    //addSelect();
  };
  //console.log(slide);
  return (
    <SwiperSlide key={slide.id} className="swiper-card__slide">
      <img src={slide.img} className="swiper-card__image" alt="Image: Jacket" />
      <div className="swiper-card__select">
        <span className="swiper-card__text">{slide.name}</span>
        <button
          className={
            activeSelect
              ? "swiper-card__icon swiper-card__icon--active"
              : "swiper-card__icon"
          }
          onClick={() => addSelect()}
        ></button>
      </div>
      <span className="swiper-card__price">{slide.price}</span>
    </SwiperSlide>
  );
};
