/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CatalogItem = ({ item }) => {
  return (
    <>
      <div id={item.id} className="catalog-assortment__jacket">
        <img src={item.img} alt="Photo: Jacket" className="catalog-assortment__image" />
        <div className="catalog-assortment__info">
          <span className="catalog-assortment__text">{item.name}</span>
          <button className="catalog-assortment__button"></button>
        </div>
        <span className="catalog-assortment__price">{item.price}</span>
      </div>
    </>
  );
};
