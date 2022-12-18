/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import Link from "next/link";
import { AppContext } from "../context/AppContext";

export const CatalogItem = ({ jacket }) => {
  const { count, selects, setSelects, deleteSelect } = useContext(AppContext);
  const [activeSelect, setActiveSelect] = useState(false);

  const select = {
    ...jacket,
    count: count.count,
  };

  const addSelect = (id) => {
    let newSelect = false;
    selects.forEach((el) => {
      if (el.id === jacket.id) {
        newSelect = true;
      }
    });
    if (!newSelect) {
      setSelects([...selects, select]);
    }
    setActiveSelect(true);
    if (activeSelect === true) {
      deleteSelect(id);
      setActiveSelect(false);
    }
  };

  return (
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
            className={
              activeSelect
                ? "catalog-assortment__icon catalog-assortment__icon--active"
                : "catalog-assortment__icon"
            }
            onClick={() => addSelect(jacket.id)}
          ></button>
        </div>
        <span className="catalog-assortment__price">
          € {jacket.price.toLocaleString()}
        </span>
      </div>
    </>
  );
};
