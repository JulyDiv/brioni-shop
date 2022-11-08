/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BreadCrumb } from "../modules/BreadCrumb/BreadCrumb";
import { SizeItem } from "../components/SizeItem";
import { ChoiceItem } from "./ChoiceItem";
import { CardModalMobile } from "../modules/CardModalMobile/CardModalMobile";
import { useSize } from "../hooks/useSize";
import { useChoice } from "../hooks/useChoice";

export const CardItem = ({ jacket }) => {
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
                <div className="card-info__item"></div>
                <div className="card-info__item"></div>
              </div>
              <div className="card-info__color-name">
                {jacket.color.map((item, id) => (
                  <span className="card-info__name-item" key={id}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="line card-info__line"></div>
            </div>
            <SizeItem {...size} />
            <div className="card-info__mobile">
              <CardModalMobile jacket={jacket} />
            </div>
            <button className="button-dark card-info__button" type="submit">
              Add to card
            </button>
            <p className="card-info__text">
              The Brioni iconic {jacket.name} a staple from our Archive, has
              been revised as a contemporary travel piece. This single breasted
              jacket is based on our Virgilio fit but it features two special
              front patch pockets with three different entrances studied for
              practicality: top, side and middle to comfortably rest the hands.
              The side leather belt is a nod to its past function to hold ...
              <button className="card-info__link-button"> View all</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
