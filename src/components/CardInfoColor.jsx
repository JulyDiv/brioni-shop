/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export const CardInfoColor = ({ jacket }) => {
  const { changeColor, color } = useContext(AppContext);
  const [activeColor, setActiveColor] = useState();

  const onClick = (item) => {
    setActiveColor(item);
  }

  return (
    <>
      {jacket.color.map((item, id) => (
        <div key={id} className="card-info__color-name">
          <label
            className={
              activeColor === item
                ? "card-info__item card-info__item--active"
                : "card-info__item"
            }
            onClick={() => onClick(item)}
          >
            <input
              className="card-info__size-input"
              type="radio"
              name="color"
              value={item.colorName}
              onChange={changeColor}
            />
            <img src={item.colorImg} alt="color" />
          </label>
          <span className="card-info__name-item">{item.colorName}</span>
        </div>
      ))}
      {/* {jacket.color.map(({ id, colorImg, colorName, status }) => (
        <div key={id} className="card-info__color-name">
          <label
            className={
              status === true
                ? "card-info__item card-info__item--active"
                : "card-info__item"
            }
          >
            <input
              className="card-info__size-input"
              type="checkbox"
              onChange={() => checkedColor(id)}
            />
            <img src={colorImg} alt="color" />
          </label>
          <span className="card-info__name-item">{colorName}</span>
        </div>
      ))} */}
    </>
  );
};
