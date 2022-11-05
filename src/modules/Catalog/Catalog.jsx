/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import dbCatalog from "../../DBCatalog";
import { CatalogItem } from "../../components/CatalogItem";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import { Character } from "../Character/Character";
import { CardModal } from "../CardModal/CardModal";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";
import useIsOpenCard from "../../hooks/useIsOpenCard";

export const Catalog = () => {
  const isOpenCard = useIsOpenCard();
  const [itemList, setItemList] = useState(dbCatalog);
  return (
    <section className="catalog">
      <div className="container">
        <BreadCrumb />
        <p className="catalog-text">
          Models for all occasions: from impeccably tailored classic blazers to
          more relaxed blazers for relax.
        </p>
        <Character />
        <div className="line catalog__line"></div>
        <div className="catalog-mobile">
          <CharacterButtonMobile name="Filter" />
          <CharacterButtonMobile name="Sort" />
        </div>
        <div className="catalog-assortment">
          {itemList.map((card, id) => (
            <CatalogItem key={id} card={card} {...isOpenCard} />
          ))}
        </div>
        <button className="button-dark catalog__button">Show more</button>
        {isOpenCard.isOpenCard && (
          <>
            <CardModal {...isOpenCard} />
          </>
        )}
      </div>
    </section>
  );
};
