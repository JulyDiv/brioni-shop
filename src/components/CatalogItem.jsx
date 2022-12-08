/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const CatalogItem = ({ jacket }) => {
  const { count, selects, setSelects } = useContext(AppContext);
  const [activeSelect, setActiveSelect] = useState(false);

  const select = {
    ...selects,
    //count: count.count,
  };

  const deleteSelect = (id) => {
    let newSelect = [...selects.values()].filter((item) => item.id != id);
    setSelects(newSelect);
  };

  const addSelect = () => {
    const list = new Map(selects);
    if (list.get(jacket.id)) {
      list.set(jacket.id, {
        ...jacket,
        count: count.count,
      });
    } else {
      list.set(jacket.id, select);
    }
    setSelects(list);
    console.log(list);
    setActiveSelect(true);
    activeSelect ? setActiveSelect(false) : setActiveSelect(true);
  };

  // const totalCounterSelect = [...selects.values()].reduce(
  //   (result, select) => select.count + result,
  //   0
  // );

  // const onClick = () => {
  //   setActiveSelect(true);
  //   activeSelect ? setActiveSelect(false) : setActiveSelect(true);
  // };

  //console.log(jacket);
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
            onClick={() => addSelect()}
          ></button>
        </div>
        <span className="catalog-assortment__price">
          € {jacket.price.toLocaleString()}
        </span>
      </div>
    </>
  );
};
