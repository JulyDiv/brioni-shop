import React from "react";
import { useState } from "react";
import dbSwiperCard from "../../DBSwiperCard";
import { SwiperCard } from "../SwiperCard/SwiperCard";

export const Complete = () => {
  const [swiperCard, setSwiperCard] = useState(dbSwiperCard);
  return (
    <section className="complete">
      <div className="container">
        <div className="line complete__line"></div>
        <div className="complete-wrapper">
          <h1 className="complete__title">Complete your look</h1>
          <SwiperCard swiperCard={swiperCard} />
        </div>
      </div>
    </section>
  );
};
