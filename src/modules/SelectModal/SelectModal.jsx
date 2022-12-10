/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

export const SelectModal = ({ jacket, title, button, addSelect }) => {
  return (
    <>
      <ModalOverlay />
      <div key={jacket.id} className="card-modal">
        <h3 className="card-modal__title">{title}</h3>
        <div className="card-modal__info">
          <img src={jacket.img} alt="Jacket" className="card-modal__image" />
          <div className="card-modal__text">
            <h3 className="card-modal__name">{jacket.name}</h3>
            <span className="card-modal__span">
              Price : € {jacket.price.toLocaleString()}
            </span>
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
