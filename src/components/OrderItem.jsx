/* eslint-disable @next/next/no-img-element */
import React from "react";
//import { useContext } from "react";
//import { AppContext } from "../context/AppContext";

export const OrderItem = ({ order }) => {
  //const card = useContext(AppContext);
  //console.log(card);
    return (
      <>
        <div key={order.id} className="bag-info">
          <img src={order.img} alt="Jacket" className="bag-info__image" />
          <div className="bag-info__text">
            <h3 className="bag-info__title">{order.name}</h3>
            <span className="bag-info__span">Color : </span>
            <span className="bag-info__span">Size : </span>
            <span className="bag-info__span">Quantity : </span>
          </div>
        </div>

        <div className="line bag__line"></div>

        <div className="bag-price">
          <span className="bag-price__span">Price : {order.price}</span>
          <button className="bag-price__button" onClick={() => {}}>
            Delete
          </button>
        </div>
      </>
    );
}