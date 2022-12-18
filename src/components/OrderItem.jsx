/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Count } from "../modules/Count/Count";

export const OrderItem = ({ order, index }) => {

  const { totalPrice, deleteOrder } = useContext(AppContext);

  return (
    <>
      <div
        className="bag-info"
      >
        <img src={order.img} alt="Jacket" className="bag-info__image" />
        <div className="bag-info__text">
          <h3 className="bag-info__title">{order.name}</h3>
          <span className="bag-info__span">Color : {order.color}</span>
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
