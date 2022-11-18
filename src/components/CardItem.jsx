/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import { BreadCrumb } from "../modules/BreadCrumb/BreadCrumb";
import { SizeItem } from "../components/SizeItem";
import { ChoiceItem } from "./ChoiceItem";
import { CardMobile } from "../modules/CardMobile/CardMobile";
import { useSize } from "../hooks/useSize";
import { useChoice } from "../hooks/useChoice";
import { CardInfoColor } from "./CardInfoColor";

export const CardItem = ({ jacket }) => {
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const size = useSize(jacket);
  const choice = useChoice(jacket);
  return (
    <section key={jacket.id} className="card">
      <div className="container">
        <BreadCrumb jacket={jacket} />
        <div className="line card__line"></div>

        <div className="card-wrapper">
          <div className="card-jackets">
            <ChoiceItem {...choice} />

            <img className="card-main" src={jacket.img} alt="Photo: jacket" />
          </div>

          <div className="card-info">
            <div className="card-info__select">
              <span className="card-info__articl">{jacket.articl}</span>
              <img src="/img/select-catalog.svg" alt="Icon: select" />
            </div>
            <div className="card-info__name">
              <h3 className="card-info__title">{jacket.name}</h3>
              <span className="card-info__price">{jacket.price}</span>
            </div>

            <div className="card-info__color-block">
              <div className="line card-info__line"></div>

              <span className="card-info__choose">Choose your color</span>

              <div className="card-info__color">
                <CardInfoColor jacket={jacket} />
              </div>
              <div className="line card-info__line"></div>
            </div>
            <div className="card-info__size">
              <span className="card-info__choose">Choose your size</span>
              <div className="card-info__size-block">
                <SizeItem {...size} />
              </div>
              <div className="line card-info__line"></div>
            </div>
            <div className="card-info__mobile">
              <CardMobile jacket={jacket} />
            </div>
            <button className="button-dark card-info__button" type="submit">
              Add to card
            </button>
            <p className="card-info__text">
              {jacket.description.length <= 300 ? (
                jacket.description
              ) : (
                <>
                  {jacket.description.substr(0, 300)}
                  {!showMoreBtn && (
                    <button
                      className="card-info__link-button"
                      onClick={() => setShowMoreBtn(true)}
                    >
                      ... View all
                    </button>
                  )}
                  {showMoreBtn && jacket.description.substr(300)}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
