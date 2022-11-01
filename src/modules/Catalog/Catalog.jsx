import React from "react";
import { useState } from "react";
import dbCatalog from "../../DBCatalog";
import { CatalogItem } from "../../components/CatalogItem";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import { Character } from "../Character/Character";
import { CardModal } from "../CardModal/CardModal";
import { SwiperCardMobile } from "../SwiperCardMobile/SwiperCardMobile";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";

export const Catalog = () => {
  const [itemList, setItemList] = useState(dbCatalog);
  const [isOpenCard, setIsOpenCard] = useState(false);
  return (
    <section className="catalog">
      <div className="container">
        <BreadCrumb isOpenCard={isOpenCard} setIsOpenCard={setIsOpenCard} />
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
          {itemList.map((item, id) => (
            <CatalogItem key={id} item={item} setIsOpenCard={setIsOpenCard} />
          ))}
        </div>
        <button className="button-dark catalog__button">Show more</button>
        {/* <SwiperCardMobile /> */}
        {isOpenCard && <CardModal isOpenCard={isOpenCard} />}
      </div>
    </section>
  );
};
