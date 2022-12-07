/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import { BreadCrumb } from "../modules/BreadCrumb/BreadCrumb";
import { SizeItem } from "../components/SizeItem";
import { ChoiceItem } from "./ChoiceItem";
import { CardMobile } from "../modules/CardMobile/CardMobile";
import { useSize } from "../hooks/useSize";
import { useChoice } from "../hooks/useChoice";
import { CardInfoColor } from "./CardInfoColor";
import { CardModal } from "../modules/CardModal/CardModal";
import { AppContext } from "../context/AppContext";

export const CardItem = ({ jacket }) => {
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const [activeSelect, setActiveSelect] = useState(false);

  //const size = useSize(jacket);
  const choice = useChoice(jacket);
  const { addOrder, isOpenCard, addSelect, size } = useContext(AppContext);

  const onClick = () => {
    setActiveSelect(true);
    activeSelect ? setActiveSelect(false) : setActiveSelect(true);
    addSelect();
  };

  //console.log("CardItem:", jacket.size);
  return (
    <>
      <section key={jacket.id} className="card">
        <div className="container">
          <BreadCrumb jacket={jacket} />

          <div className="card-wrapper">
            <div className="card-jackets">
              <div className="card-choice">
                <ChoiceItem {...choice} />
              </div>
              <div className="card-main">
                <img
                  className="card-main__image"
                  src={choice.activeChoice}
                  alt="Photo: jacket"
                />
              </div>
            </div>
            <div className="card-info">
              <div className="card-info__select">
                <span className="card-info__articl">{jacket.articl}</span>
                <button
                  className={
                    activeSelect
                      ? "card-info__icon card-info__icon--active"
                      : "card-info__icon"
                  }
                  onClick={() => onClick()}
                ></button>
              </div>
              <div className="card-info__name">
                <h3 className="card-info__title">{jacket.name}</h3>
                <span className="card-info__price">
                  € {jacket.price.toLocaleString()}
                </span>
              </div>

              <div className="card-info__color-block">
                {/* <div className="line card-info__line"></div> */}

                <span className="card-info__choose">Choose your color</span>

                <div className="card-info__color">
                  <CardInfoColor jacket={jacket} />
                </div>
                {/* <div className="line card-info__line"></div> */}
              </div>
              <div className="card-info__size">
                <span className="card-info__choose">Choose your size</span>
                <div className="card-info__size-block">
                  <SizeItem jacket={jacket} />
                </div>
                {/* <div className="line card-info__line"></div> */}
              </div>
              <div className="card-info__mobile">
                <CardMobile jacket={jacket} />
              </div>
              <button
                className="button-dark card-info__button"
                type="submit"
                onClick={() => addOrder()}
              >
                Add to card
              </button>
              <p className="card-info__text">
                {jacket.description.length <= 320 ? (
                  jacket.description
                ) : (
                  <>
                    {jacket.description.substr(0, 320)}
                    {!showMoreBtn && (
                      <>
                        <span> ... </span>
                        <button
                          className="card-info__link-button"
                          onClick={() => setShowMoreBtn(true)}
                        >
                          View all
                        </button>
                      </>
                    )}
                    {showMoreBtn && jacket.description.substr(320)}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      {isOpenCard && (
        <CardModal jacket={jacket} title="Add to Cart" button="Add" />
      )}
    </>
  );
};
