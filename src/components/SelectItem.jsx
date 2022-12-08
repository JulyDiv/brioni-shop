/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const SelectItem = ({ select }) => {
    const { deleteSelect } = useContext(AppContext);
    //console.log(select);
  return (
    <>
        <div key={select.id} className="select-block__jacket">
          <img
            src={select.img}
            alt="Photo: Jacket"
            className="select-block__image"
          />
          <div className="select-block__info">
            <span className="select-block__text">{select.name}</span>
            <button
              className="select-block__icon"
              onClick={() => deleteSelect(select.id)}
            ></button>
          </div>
          <span className="select-block__price">€ {select.price}</span>
        </div>
    </>
  );
};
