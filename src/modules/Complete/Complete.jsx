import React, { useState } from "react";
import dbSwiperCard from "../../DBSwiperCard";
import { SwiperCard } from "../SwiperCard/SwiperCard";

export const Complete = ({ jacket }) => {
  const [swiperCard, setSwiperCard] = useState(dbSwiperCard);
  return (
    <section className="complete">
      <div className="container">
        <div className="complete-wrapper">
          <h1 className="complete__title">Complete your look</h1>
          <SwiperCard swiperCard={swiperCard} jacket={jacket} />
        </div>
      </div>
    </section>
  );
};
