import React, { useState, useContext } from "react";
import { CatalogItem } from "../../components/CatalogItem";
import { BreadCrumb } from "../../modules/BreadCrumb/BreadCrumb";
import { Character } from "../../modules/Character/Character";
import { CharacterMobileCatalog } from "../../modules/CharacterMobile/CharacterMobileCatalog";
import { AppContext } from "../../context/AppContext";

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://encouraging-exuberant-park.glitch.me/catalog`
  );
  const data = await res.json();
  return {
    props: { jacket: data },
  };
};

export default function Catalog({ jacket }) {

  const [showMoreBtn, setShowMoreBtn] = useState(false);

  const { search } = useContext(AppContext);

  const filter = jacket.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  })

  //console.log(jacket);

  return (
    <>
      <section className="catalog">
        <div className="container">
          <BreadCrumb />
          <p className="catalog__text">
            Models for all occasions: from impeccably tailored classic blazers
            to more relaxed blazers for relax.
          </p>
          <Character />
          <div className="catalog-mobile">
            <CharacterMobileCatalog />
          </div>
          <div className="catalog-assortment">
            {jacket.length <= 6
              ? filter.map((jacket, id) => (
                  <CatalogItem
                    key={id}
                    jacket={jacket}
                  />
                ))
              : filter
                  .slice(0, 6)
                  .map((jacket, id) => (
                    <CatalogItem key={id} jacket={jacket} />
                  ))}
            {!showMoreBtn && (
              <button
                className="button-dark catalog-assortment__button"
                onClick={() => setShowMoreBtn(true)}
              >
                Show more
              </button>
            )}
            {showMoreBtn &&
              filter
                .slice(6)
                .map((jacket, id) => <CatalogItem key={id} jacket={jacket} />)}
          </div>
        </div>
      </section>
    </>
  );
}
