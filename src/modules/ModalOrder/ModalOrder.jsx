/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { OrderItem } from "../../components/OrderItem";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { AppContext } from "../../context/AppContext";

export const ModalOrder = () => {
  const { orders, totalCounter, setIsOrder, total, isOrder, setIsContact } =
    useContext(AppContext);

  const router = useRouter();

  const closeModal = () => {
    setIsOrder(false);
    setIsContact(true);
  };

  const closeOrder = () => {
    setTimeout(() => {
      setIsOrder(false);
    }, 500);
    const closeBtn = document.querySelector(".bag");
    closeBtn.classList.toggle("bag--hidden");
  };

  const onClick = () => {
    router.push("/catalog");
    setIsOrder(false);
  };

  return (
    <>
      <ModalOverlay setIsOrder={setIsOrder} isOrder={isOrder} />
      <div className="bag">
        <div className="bag-title">
          <h3 className="bag-title__title">
            Your Bag ({totalCounter === 0 ? "Empty" : totalCounter})
          </h3>
          <button
            onClick={() => closeOrder()}
            className="close-button bag-title__button"
          >
            <img
              src="/img/close-search.svg"
              alt="close"
              className="bag-title__image"
            />
          </button>
        </div>
        {orders.length ? (
          <>
            <div className="bag-wrapper">
              <div className="bag-block">
                {orders.map((order, index) => (
                  <OrderItem key={index} order={order} index={index} />
                ))}
                {/* {[...orders.values()].length ? (
          <>
          <div className="bag-wrapper">
            <div className="bag-block">
              {[...orders.values()].map((order, id) => (
                <OrderItem key={id + new Date()} order={order} />
              ))} */}
              </div>
            </div>
            <div className="bag-total">
              <span className="bag-total__span">
                Total : € {total.toLocaleString()}
              </span>
              <button
                onClick={() => closeModal()}
                className="button-dark bag-total__button"
              >
                Proceed to checkout
              </button>
            </div>
          </>
        ) : (
          <div className="bag-empty">
            <img
              className="bag-empty__image"
              src="/img/bag-icon.svg"
              alt="bag"
            />
            <button
              className="button-dark bag-empty__button"
              onClick={() => onClick()}
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};
