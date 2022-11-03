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

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/dbCatalog");
  const data = await res.json();
  return {
    props: { jacket: data },
  };
};

export const Catalog = (props) => {
  console.log("props >>>", props);
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
          <div className="catalog-assortment__jacket">
            <img
              // src={props.jacket.img}
              alt="Photo: Jacket"
              className="catalog-assortment__image"
            />
            <div className="catalog-assortment__info">
              <span className="catalog-assortment__text"></span>
              <button className="catalog-assortment__button"></button>
            </div>
            <span className="catalog-assortment__price"></span>
          </div>
          {/* {itemList.map((item, id) => (
            <CatalogItem key={id} item={item} {...isOpenCard} />
          ))} */}
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
