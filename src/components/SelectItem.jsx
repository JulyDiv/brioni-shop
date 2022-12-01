/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const SelectItem = ({ select }) => {
    const { deleteSelect, selects } = useContext(AppContext);
    console.log(select);
  return (
    <>
      {/* {selects.map((select) => ( */}
        <div key={select.id} className="catalog-assortment__jacket">
          <img
            src={select.img}
            alt="Photo: Jacket"
            className="catalog-assortment__image"
          />
          <div className="catalog-assortment__info">
            <span className="catalog-assortment__text">{select.name}</span>
            <button
              className="select-assortment__icon"
              onClick={() => deleteSelect(select.id)}
            ></button>
          </div>
          <span className="catalog-assortment__price">€ {select.price}</span>
        </div>
       {/* ))} */}
      {/* <div key={select.id} className="catalog-assortment__jacket">
              <img
                src={select.img}
                alt="Photo: Jacket"
                className="catalog-assortment__image"
              />
            <div className="catalog-assortment__info">
              <span className="catalog-assortment__text">{select.name}</span>
              <button className="select-assortment__icon" onClick={() => deleteSelect(select.id)}></button>
            </div>
            <span className="catalog-assortment__price">
              € {select.price}
            </span>
          </div> */}
    </>
  );
};
