/* eslint-disable @next/next/no-img-element */
// import { Catalog } from "../../modules/Catalog/Catalog";
import React from "react";
import { CatalogItem } from "../../components/CatalogItem";
import { BreadCrumb } from "../../modules/BreadCrumb/BreadCrumb";
import { Character } from "../../modules/Character/Character";
import { CardModal } from "../../modules/CardModal/CardModal";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:5000/dbCatalog");
  // const response = await fetch("http://localhost:3000/api/dbCatalog");
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
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
            {jacket.map(({ id, img, name, price }) => (
              <Link key={id} href={`/catalog/${id}`}>
                <div className="catalog-assortment__jacket">
                  <img
                    src={img}
                    alt="Photo: Jacket"
                    className="catalog-assortment__image"
                  />
                  <div className="catalog-assortment__info">
                    <span className="catalog-assortment__text">{name}</span>
                    <button className="catalog-assortment__button"></button>
                  </div>
                  <span className="catalog-assortment__price">{price}</span>
                </div>
              </Link>
            ))}
          </div>
          <button className="button-dark catalog__button">Show more</button>
        </div>
      </section>
    </>
  );
}

export default Catalog;