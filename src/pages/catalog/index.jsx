import React from "react";
import { CatalogItem } from "../../components/CatalogItem";
import { BreadCrumb } from "../../modules/BreadCrumb/BreadCrumb";
import { Character } from "../../modules/Character/Character";
import { CharacterMobileCatalog } from "../../modules/CharacterMobileCatalog/CharacterMobileCatalog";

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
            <CharacterMobileCatalog />
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