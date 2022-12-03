/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
// import { ChoiceItem } from "../../components/ChoiceItem";
// import { SizeItem } from "../../components/SizeItem";
// import { useSize } from "../../hooks/useSize";
// import { useChoice } from "../../hooks/useChoice";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Count } from "../Count/Count";

export const CardModal = ({ jacket, title, button }) => {
  const { addOrder, count } = useContext(AppContext);

  // const size = useSize(isOpenCard);
  // const choice = useChoice(isOpenCard);

  return (
    <>
      <ModalOverlay />
      <div key={jacket.id} className="card-modal">
        <h3 className="card-modal__title">{title}</h3>
        <div className="card-modal__info">
          <img src={jacket.img} alt="Jacket" className="card-modal__image" />
          <div className="card-modal__text">
            <h3 className="card-modal__name">{jacket.name}</h3>
            <span className="card-modal__span">Color : </span>
            <span className="card-modal__span">Size : </span>
            <span className="card-modal__span">
              Price : € {jacket.price.toLocaleString()}
            </span>
            <Count />
          </div>
        </div>
        <button
          className="button-dark card-modal__button"
          type="submit"
          onClick={() => addOrder()}
          disabled={count < 1}
        >
          {button}
        </button>
      </div>
    </>
  );
};
