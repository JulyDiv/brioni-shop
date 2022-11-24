/* eslint-disable @next/next/no-img-element */
import React from "react";
import { OrderItem } from "../../components/OrderItem";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
//import { useContext } from "react";
//import { AppContext } from "../../context/AppContext";

export const ModalOrder = ({
  setIsOrder,
  setIsContact,
  isOrder,
  orders,
  setOrders,
}) => {
  //const card = useContext(AppContext);

  const closeModal = () => {
    setIsOrder(false);
    setIsContact(true);
  };

  //console.log(card.orders);
  //console.log(card);
  //console.log(order);
  return (
    <>
      {/* <ModalOverlay setIsOrder={setIsOrder} isOrder={isOrder} /> */}
      <div className="bag">
        <div className="bag-wrapper">
          <div className="bag-title">
            <h3 className="bag-title__title">Your Bag ( )</h3>
            <button
              onClick={() => setIsOrder(false)}
              className="close-button bag-title__button"
            >
              <img
                src="/img/close-search.svg"
                alt="close"
                className="bag-title__image"
              />
            </button>
          </div>
          <div className="bag-block">
            <div className="line bag-block__line"></div>
            {[...orders.values()].map((order, id) => (
              <OrderItem key={id} order={order} />
            ))}
          </div>
          <div className="bag-total">
            <div className="line bag__line"></div>
            <span className="bag-total__span">Total : € </span>
            <button
              onClick={() => closeModal()}
              className="button-dark bag-total__button"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
