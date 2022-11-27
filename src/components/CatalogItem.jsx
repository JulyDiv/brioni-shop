/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export const CatalogItem = ({ jacket }) => {
  return (
    <>
      {jacket.map((jacket) => (
        <>
          <div className="catalog-assortment__jacket">
            <Link
              key={jacket.id}
              href={`/catalog/${jacket.id}`}
              className="catalog-assortment__link"
            >
              <img
                src={jacket.img}
                alt="Photo: Jacket"
                className="catalog-assortment__image"
              />
            </Link>
            <div className="catalog-assortment__info">
              <span className="catalog-assortment__text">{jacket.name}</span>
              <button className="catalog-assortment__icon"></button>
            </div>
            <span className="catalog-assortment__price">
              € {jacket.price.toLocaleString()}
            </span>
          </div>
        </>
      ))}
    </>
  );
};
