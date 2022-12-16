/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { ErrorModal } from "../modules/ErrorModal/ErrorModal";

export const CardInfoColor = ({ jacket }) => {
  const { changeColor, activeColor, setActiveColor, isErrorModalColor } = useContext(AppContext);

  const onClick = (item) => {
    setActiveColor(item);
  }

  return (
    <>
      {jacket.color.map((item, id) => (
        <div key={id} className="card-info__color-name">
          <label
            // className={
            //   activeColor === item
            //     ? "card-info__item card-info__item--active"
            //     : "card-info__item"
            // }
            onClick={() => onClick(item)}
          >
            <input
              className="card-info__size-input"
              type="radio"
              name="color"
              value={item.colorName}
              onChange={changeColor}
            />
            <img
              src={item.colorImg}
              alt="color"
              //className="card-info__item-image"
              className={
                activeColor === item
                  ? "card-info__item-image card-info__item-image--active"
                  : "card-info__item-image"
              }
            />
          </label>
          <span className="card-info__name-item">{item.colorName}</span>
        </div>
      ))}
      {isErrorModalColor && <ErrorModal description="Choose a color" />}
    </>
  );
};
