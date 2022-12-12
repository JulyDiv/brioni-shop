/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const OrderItem = ({ order, index }) => {

  const { totalPrice, deleteOrder, setIsOpenCard, colors, sizes, color, orders } = useContext(AppContext);
  //console.log(order);
  console.log(orders);
  return (
    <>
      <div
        className="bag-info"
        //onClick={() => setIsOpenCard({ ...order }, order.id)}
      >
        <img src={order.img} alt="Jacket" className="bag-info__image" />
        <div className="bag-info__text">
          <h3 className="bag-info__title">{order.name}</h3>
          {/* <span className="bag-info__span">Color : {colors}</span> */}
          <span className="bag-info__span">Color : {order.color}</span>
          {/* <span className="bag-info__span">Size : {sizes}</span> */}
          <span className="bag-info__span">Size : {order.size}</span>
          <span className="bag-info__span">Quantity : {order.count}</span>
        </div>
      </div>
      <div className="bag-price">
        <span className="bag-price__span">
          Price : € {totalPrice(order).toLocaleString()}
        </span>
        <button
          className="bag-price__button"
          onClick={() => deleteOrder(index)}
        >
          Delete
        </button>
      </div>
    </>
  );
};
