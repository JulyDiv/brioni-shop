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
import { ModalOrder } from "../modules/ModalOrder/ModalOrder";
import { CardModal } from "../modules/CardModal/CardModal";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const CardItem = ({ jacket, isOrder, orders, setOrders, setIsOrder, isOpenCard, setIsOpenCard }) => {

  const [showMoreBtn, setShowMoreBtn] = useState(false);

  const size = useSize(jacket);
  const choice = useChoice(jacket);
  const card = useContext(AppContext);

  //console.log("card...>>>", card);
  //console.log("orders...>>>", orders);
  //console.log("order...>>>", order);
  //console.log("jacket...>>>", jacket);

  return (
    <>
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
              <button
                className="button-dark card-info__button"
                type="submit"
                onClick={() => card.addOrder()}
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
      {/* {isOpenCard && (
        <CardModal
          jacket={jacket}
          isOpenCard={isOpenCard}
          setIsOpenCard={setIsOpenCard}
          orders={orders}
          setOrders={setOrders}
        />
      )} */}
    </>
  );
};
