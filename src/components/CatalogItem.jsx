/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { SelectModal } from "../modules/SelectModal/SelectModal";

export const CatalogItem = ({ jacket }) => {
  const { count, selects, setSelects, deleteSelect } = useContext(AppContext);
  const [activeSelect, setActiveSelect] = useState(false);
  const [isSelectModal, setIsSelectModal] = useState(false);

  const select = {
    ...jacket,
    count: count.count,
  };

  // const deleteSelect = (id) => {
  //   let newSelect = [...selects.values()].filter((item) => item.id != id);
  //   setSelects(newSelect);
  // };

  const addSelect = (id) => {
    // const list = new Map(selects);
    // if (list.get(jacket.id)) {
    //   list.set(jacket.id, {
    //     ...jacket,
    //     count: count.count,
    //   });
    // } else {
    //   list.set(jacket.id, select);
    // }
    // setSelects(list);
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
    //selects ? deleteSelect(id) : addSelect()
    //activeSelect ? setActiveSelect(false) : setActiveSelect(true);
    //setIsSelectModal(true);
    //activeSelect ? deleteSelect(id) : "";
    //isSelectModal ? setIsSelectModal(false) : setIsSelectModal(true);
  };

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
            onClick={() => addSelect(jacket.id)}
          ></button>
        </div>
        <span className="catalog-assortment__price">
          € {jacket.price.toLocaleString()}
        </span>
      </div>
      {/* {isSelectModal && (
        <SelectModal
          jacket={jacket}
          addSelect={addSelect}
          title="Add to Select"
          button="Select"
        />
      )} */}
    </>
  );
};
