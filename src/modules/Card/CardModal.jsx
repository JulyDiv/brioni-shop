/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ChoiceItem } from "../../components/ChoiceItem";
import { SizeItem } from "../../components/SizeItem";
import { useSize } from "../../hooks/useSize";
import { useChoice } from "../../hooks/useChoice";
import { CardModalMobile } from "../CardModalMobile/CardModalMobile";
import { Complete } from "../Complete/Complete";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

export const CardModal = ({ isOpenCard, setIsOpenCard }) => {

  const size = useSize(isOpenCard);
  const choice = useChoice(isOpenCard);

  return (
    <>
    {/* <ModalOverlay setIsOpenCard={setIsOpenCard} /> */}
      <section key={isOpenCard.id} className="card">
        <div className="container">
          <BreadCrumb isOpenCard={isOpenCard} />
          <div className="line card__line"></div>

          <div className="card-wrapper">
            <div className="card-jackets">
              <ChoiceItem {...choice} />

              <img
                className="card-main"
                src={isOpenCard.img}
                alt="Photo: jacket"
              />
            </div>

            <div className="card-info">
              <div className="card-info__select">
                <span className="card-info__articl">{isOpenCard.articl}</span>
                <img
                  src="/img/select-catalog.svg"
                  className="card-info__icon"
                  alt="Icon: select"
                />
              </div>

              <div className="card-info__name">
                <h3 className="card-info__title">{isOpenCard.name}</h3>
                <span className="card-info__price">{isOpenCard.price}</span>
              </div>

              <div className="card-info__color-block">
                <div className="line card-info__line"></div>

                <span className="card-info__choose">Choose your color</span>
                <div className="card-info__color">
                  <button className="card-info__item"></button>
                  <button className="card-info__item"></button>
                </div>
                <div className="card-info__color-name">
                  {isOpenCard.color.map((item, id) => (
                    <span className="card-info__name-item" key={id}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="line card-info__line"></div>
              </div>
              <SizeItem {...size} />
              <div className="card-info__mobile">
                <CardModalMobile isOpenCard={isOpenCard} />
              </div>
              <button className="button-dark card-info__button" type="submit">
                Add to card
              </button>
              <p className="card-info__text">
                The Brioni iconic {isOpenCard.name} a staple from our Archive,
                has been revised as a contemporary travel piece. This single
                breasted jacket is based on our Virgilio fit but it features two
                special front patch pockets with three different entrances
                studied for practicality: top, side and middle to comfortably
                rest the hands. The side leather belt is a nod to its past
                function to hold ...
                <button className="card-info__link-button"> View all</button>
              </p>
            </div>
          </div>
        </div>
        <Complete />
      </section>
      
    </>
  );
};
