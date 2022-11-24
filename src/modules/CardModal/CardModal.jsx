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

export const CardModal = ({ isOpenCard, setIsOpenCard, orders, setOrders, jacket }) => {

const card = useContext(AppContext);
  // const size = useSize(isOpenCard);
  // const choice = useChoice(isOpenCard);
// const order = {
//   ...isOpenCard,
//   // name: isOpenCard.name,
//   // id: isOpenCard.id,
//   // price: isOpenCard.price,
// };
// const addOrder = () => {
//   setOrders([...orders, order]);
//   setIsOpenCard(false);
// };
//console.log("orders...>>>", orders);

  return (
    <>
      <ModalOverlay />
      <div key={jacket.id} className="card-modal">
        <h3>Товар добавлен в корзину</h3>
        <div className="bag-info">
          <img src={jacket.img} alt="Jacket" className="bag-info__image" />
          <div className="bag-info__text">
            <h3 className="bag-info__title">{jacket.name}</h3>
            <span className="bag-info__span">Color : </span>
            <span className="bag-info__span">Size : </span>
            <span className="bag-price__span">Price : {jacket.price}</span>
          </div>
        </div>

        <div className="line bag__line"></div>

        <div className="bag-price">
          <button
            className="button-dark card-info__button"
            type="submit"
            onClick={() => card.addOrder()}
          >
            ок!
          </button>
          {/* <button className="button-dark card-info__button" onClick={() => setIsOpenCard(false)}>
            Cancel
          </button> */}
        </div>
      </div>
    </>
  );
};
