/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const CardInfoColor = ({ jacket }) => {
  const { checkedColor } = useContext(AppContext);

  return (
    <>
      {jacket.color.map(({ id, colorImg, colorName }) => (
        <div key={id} className="card-info__color-name">
          <label>
            <input
              className="card-info__size-input"
              type="checkbox"
              onChange={() => checkedColor(id)}
            />
            <img src={colorImg} alt="color" className="card-info__item" />
          </label>
          <span className="card-info__name-item">{colorName}</span>
        </div>
      ))}
    </>
  );
};
