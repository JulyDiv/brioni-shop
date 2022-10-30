import React from "react";
import { useState } from "react";
import dbCatalog from "../../DBCatalog";
import { CatalogItem } from "../../components/CatalogItem";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import { Character } from "../Character/Character";

export const Catalog = () => {
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
        <div className="catalog-assortment">
          {itemList.map((item, id) => (
            <CatalogItem key={id} item={item} />
          ))}
        </div>
        <button class="button-dark catalog__button">Show more</button>
      </div>
    </section>
  );
};
