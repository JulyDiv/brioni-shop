/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const SelectItem = ({ select }) => {
    const { deleteSelect } = useContext(AppContext);
    //console.log(select);
  return (
    <>
      <div key={select.id} className="select-jacket">
        <img
          src={select.img}
          alt="Photo: Jacket"
          className="select-jacket__image"
        />
        <div className="select-jacket__info">
          <span className="select-jacket__text">{select.name}</span>
          <button
            className="select-jacket__icon"
            onClick={() => deleteSelect(select.id)}
          ></button>
        </div>
        <span className="select-jacket__price">€ {select.price}</span>
      </div>
    </>
  );
};
