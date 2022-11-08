/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CatalogItem } from "../../components/CatalogItem";
import { BreadCrumb } from "../../modules/BreadCrumb/BreadCrumb";
import { Character } from "../../modules/Character/Character";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://encouraging-exuberant-park.glitch.me/catalog`
  );
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
            <CatalogItem jacket={jacket} />
          </div>
          <button className="button-dark catalog__button">Show more</button>
        </div>
      </section>
    </>
  );
}

export default Catalog;