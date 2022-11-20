import React from "react";
import { useState } from "react";
import { CatalogItem } from "../../components/CatalogItem";
import { BreadCrumb } from "../../modules/BreadCrumb/BreadCrumb";
import { Character } from "../../modules/Character/Character";
import { CharacterMobileCatalog } from "../../modules/CharacterMobile/CharacterMobileCatalog";

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
  const [showMoreBtn, setShowMoreBtn] = useState(false);
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
          <div className="line catalog__line"></div>
          <div className="catalog-mobile">
            <CharacterMobileCatalog />
          </div>
          <div className="catalog-assortment">
            {jacket.length <= 6 ? (
              <CatalogItem jacket={jacket} />
            ) : (
              <>
                <CatalogItem jacket={jacket.slice(0, 6)} />
                {!showMoreBtn && (
                  <button
                    className="button-dark catalog-assortment__button"
                    onClick={() => setShowMoreBtn(true)}
                  >
                    Show more
                  </button>
                )}
                {showMoreBtn && <CatalogItem jacket={jacket.slice(6)} />}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;