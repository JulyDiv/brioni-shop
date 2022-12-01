/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const CatalogItem = ({ jacket }) => {
  const { addSelect } = useContext(AppContext);
  const [activeSelect, setActiveSelect] = useState(false);

  const onClick = () => {
    setActiveSelect(true);
    activeSelect ? setActiveSelect(false) : setActiveSelect(true);
    addSelect();
  }

  return (
    <>
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
            <button
              //className="catalog-assortment__icon"
              className={
                activeSelect
                  ? "catalog-assortment__icon catalog-assortment__icon--active"
                  : "catalog-assortment__icon"
              }
              onClick={() => onClick()}
            ></button>
          </div>
          <span className="catalog-assortment__price">
            € {jacket.price.toLocaleString()}
          </span>
        </div>
      </>
      {/* {jacket.map(({ id, name, price, img }) => (
        <>
          <div className="catalog-assortment__jacket">
            <Link
              key={id}
              href={`/catalog/${id}`}
              className="catalog-assortment__link"
            >
              <img
                src={img}
                alt="Photo: Jacket"
                className="catalog-assortment__image"
              />
            </Link>
            <div className="catalog-assortment__info">
              <span className="catalog-assortment__text">{name}</span>
              <button
                className="catalog-assortment__icon"
                // className={
                //   activeSelect
                //     ? "catalog-assortment__icon catalog-assortment__icon--active"
                //     : "catalog-assortment__icon"
                // }
                onClick={() => onClick(id)}
              ></button>
            </div>
            <span className="catalog-assortment__price">
              € {price.toLocaleString()}
            </span>
          </div>
        </>
      ))} */}
    </>
  );
};
