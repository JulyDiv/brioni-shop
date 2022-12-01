/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const SelectModal = ({
  isOpenCard,
  setIsOpenCard,
  orders,
  setOrders,
  jacket,
  selects,
  setIsSelectModal,
}) => {
  const card = useContext(AppContext);

  // const size = useSize(isOpenCard);
  // const choice = useChoice(isOpenCard);

  //console.log("selects...>>>", selects);
  //   const closeModal = () => {
  //     setIsSelectModal(false);
  //     card.addSelect();
  //   };
  console.log(jacket);
  return (
    <>
      {/* <ModalOverlay /> */}
      {/* {jacket.map((jacket) => ( */}
        <div key={jacket.id} className="card-modal">
          <h3>Выберите количество</h3>
          <div className="bag-info">
            <img src={jacket.img} alt="Jacket" className="bag-info__image" />
            <div className="bag-info__text">
              <h3 className="bag-info__title">{jacket.name}</h3>
              <span className="bag-info__span">Color : </span>
              <span className="bag-info__span">Size : </span>
              <span className="bag-price__span">Price : € {jacket.price}</span>
              {/* <Count /> */}
            </div>
          </div>

          <div className="line bag__line"></div>

          <div className="bag-price">
            <button
              className="button-dark card-info__button"
              type="submit"
              onClick={() => card.addSelect()}
            >
              ок!
            </button>
            {/* <button className="button-dark card-info__button" onClick={() => card.setIsOpenCard(false)}>
            Cancel
          </button> */}
          </div>
        </div>
      {/* ))} */}
    </>
  );
};
