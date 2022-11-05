/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CatalogItem = ({ setIsOpenCard, card }) => {

  const openCard = (card) => {
    setIsOpenCard(true);
    setIsOpenCard(card);
  };
  return (
    <>
      <div key={card.id} className="catalog-assortment__jacket">
        <img
          src={card.img}
          alt="Photo: Jacket"
          className="catalog-assortment__image"
          onClick={() => openCard(card)}
        />
        <div className="catalog-assortment__info">
          <span className="catalog-assortment__text">{card.name}</span>
          <button className="catalog-assortment__button"></button>
        </div>
        <span className="catalog-assortment__price">{card.price}</span>
      </div>
    </>
  );
};
