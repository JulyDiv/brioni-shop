/* eslint-disable @next/next/no-img-element */
// import { Catalog } from "../../modules/Catalog/Catalog";
import React from "react";
// import { useState } from "react";
// import dbCatalog from "../../DBCatalog";
import { CatalogItem } from "../../components/CatalogItem";
import { BreadCrumb } from "../../modules/BreadCrumb/BreadCrumb";
import { Character } from "../../modules/Character/Character";
import { CardModal } from "../../modules/CardModal/CardModal";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/dbCatalog");
  const data = await res.json();
  return {
    props: { jacket: data },
  };
};

const Catalog = ({ jacket }) => {
  return (
    <>
      <section className="catalog">
        <div className="container">
          <BreadCrumb />
          <p className="catalog-text">
            Models for all occasions: from impeccably tailored classic blazers
            to more relaxed blazers for relax.
          </p>
          <Character />
          <div className="line catalog__line"></div>
          <div className="catalog-mobile">
            <CharacterButtonMobile name="Filter" />
            <CharacterButtonMobile name="Sort" />
          </div>
          <div className="catalog-assortment">
            {jacket.map((jacket) => (
              <Link key={jacket.id} href={`/catalog/${jacket.id}`}>
                <div className="catalog-assortment__jacket">
                  <img
                    src={jacket.img}
                    alt="Photo: Jacket"
                    className="catalog-assortment__image"
                  />
                  <div className="catalog-assortment__info">
                    <span className="catalog-assortment__text">{jacket.name}</span>
                    <button className="catalog-assortment__button"></button>
                  </div>
                  <span className="catalog-assortment__price">{jacket.price}</span>
                </div>
              </Link>
            ))}
            {/* {itemList.map((item, id) => (
            <CatalogItem key={id} item={item} {...isOpenCard} />
          ))} */}
          </div>
          <button className="button-dark catalog__button">Show more</button>
        </div>
      </section>
    </>
  );
}

export default Catalog;