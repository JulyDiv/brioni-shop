/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Preloader = () => {
  return (
    <div class="preloader">
      <div class="preloader-wrapper">
        <img class="preloader__img" src="img/preloader-brioni.png" alt="" />
        <span class="preloader__span">Continental Style</span>
      </div>
    </div>
  );
};
