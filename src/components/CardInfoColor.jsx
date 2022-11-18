/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CardInfoColor = ({ jacket }) => {
  return (
    <>
      {jacket.color.map(({ id, colorImg, colorName }) => (
        <div key={id} className="card-info__color-name">
          <img src={colorImg} alt="color" className="card-info__item" />
          <span className="card-info__name-item">{colorName}</span>
        </div>
      ))}
    </>
  );
};
