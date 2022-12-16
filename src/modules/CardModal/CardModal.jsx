/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Count } from "../Count/Count";

export const CardModal = ({ jacket, title, button }) => {
  const { addOrder, colors, sizes, addSelect, isOpenCard, color, size } = useContext(AppContext);
  return (
    <>
      <ModalOverlay />
      <div key={jacket.id} className="card-modal">
        <h3 className="card-modal__title">{title}</h3>
        <div className="card-modal__info">
          <img src={jacket.img} alt="Jacket" className="card-modal__image" />
          <div className="card-modal__text">
            <h3 className="card-modal__name">{jacket.name}</h3>
            <span className="card-modal__span">Color : {color}</span>
            <span className="card-modal__span">Size : {size}</span>
            {/* <span className="card-modal__span">Color : {colors}</span> */}
            {/* <span className="card-modal__span">Size : {sizes}</span> */}
            {/* {colors ? (
              <span className="card-modal__span">Color : {colors}</span>
            ) : (
              ""
            )} */}
            {/* {sizes ? (
              <span className="card-modal__span">Size : {sizes}</span>
            ) : (
              ""
            )} */}
            <span className="card-modal__span">
              Price : € {jacket.price.toLocaleString()}
            </span>
            {/* <Count /> */}
            {/* {sizes ? <Count /> : ""} */}
          </div>
        </div>
        <button
          className="button-dark card-modal__button"
          onClick={addSelect()}
        >
          {button}
        </button>
      </div>
    </>
  );
};
