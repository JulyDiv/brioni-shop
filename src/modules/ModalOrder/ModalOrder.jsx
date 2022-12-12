/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { OrderItem } from "../../components/OrderItem";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { AppContext } from "../../context/AppContext";

export const ModalOrder = () => {
  const { orders, totalCounter, setIsOrder, total, isOrder, setIsContact } = useContext(AppContext);

  const router = useRouter();

  const closeModal = () => {
    setIsOrder(false);
    setIsContact(true);
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
          <>
            <div className="line bag-block__line"></div>
            <img
              src="/img/bag-icon.svg"
              alt="bag"
              style={{
                width: "75%",
                display: "flex",
                margin: "0 auto 50px auto",
              }}
            />
            <button
              className="button-dark"
              style={{
                width: "75%",
                minHeight: "50px",
                margin: "auto",
              }}
              onClick={() => onClick()}
            >
              Start Shopping
            </button>
          </>
        )}
      </div>
    </>
  );
};
