/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { OrderItem } from "../../components/OrderItem";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const ModalOrder = ({
  setIsOrder,
  setIsContact,
  isOrder,
  orders,
  setOrders,
  count,
}) => {

  const card = useContext(AppContext);

  const router = useRouter();

  const closeModal = () => {
    setIsOrder(false);
    setIsContact(true);
  };

  const onClick = () => {
    router.push("/catalog");
    card.setIsOrder(false);
  }

  // const deleteOrder = (id) => {
  //   let newOrder = [...orders.values()].filter((item) => item.id != id);
  //   setOrders(newOrder);
  // };

  // const totalPrice = (order) => {
  //   order.price * order.count;
  //   //console.log(order.price);
  //   //console.log(order.count);
  // };
  //console.log(totalPrice); // f

  // const total = [...orders.values()].reduce(
  //   (result, order) => totalPrice(order) + result,
  //   0
  // );
  // const total = [...orders.values()].reduce(
  //   (result, order) => totalPrice(order) + result,
  //   0
  // );
  //console.log(totalPrice(order));
  //console.log(...orders.values());
  //console.log(total); // NaN

  const totalCounter = [...orders.values()].reduce(
    (result, order) => order.count + result,
    0
  );
  //console.log(totalCounter);

  //const totalItem =

  //console.log(card.orders);
  //console.log(card);
  //console.log(card.orders);
  //console.log(totalPrice(orders));
  //const totalPrice = order.price * order.count;
  return (
    <>
      {/* <ModalOverlay setIsOrder={setIsOrder} isOrder={isOrder} /> */}
      <div className="bag">
        <div className="bag-wrapper">
          <div className="bag-title">
            <h3 className="bag-title__title">
              Your Bag ({card.totalCounter === 0 ? "Empty" : card.totalCounter})
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

          {[...orders.values()].length ? (
            <div className="bag-block">
              <div className="line bag-block__line"></div>
              {[...orders.values()].map((order, id) => (
                <OrderItem key={id + new Date()} order={order} />
              ))}
            </div>
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
                  height: "50px",
                  margin: "auto",
                }}
                onClick={() => onClick()}
              >
                Start Shopping
              </button>
            </>
          )}

          <div className="bag-total">
            <div className="line bag__line"></div>
            <span className="bag-total__span">
              Total : € {card.total.toLocaleString()}
            </span>
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
