/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

export const ModalOrder = ({ setIsOrder, setIsContact }) => {
  return (
    <>
      <ModalOverlay setIsOrder={setIsOrder} />
      <div className="bag">
        <div className="bag-wrapper">
          <div className="bag-title">
            <h3 className="bag-title__title">Your Bag ( )</h3>
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

          <div className="line bag__line"></div>

          <div className="bag-info">
            <div className="bag-info__image"></div>
            <div className="bag-info__text">
              <h3 className="bag-info__title">Name</h3>
              <span className="bag-info__span">Color : </span>
              <span className="bag-info__span">Size : </span>
              <span className="bag-info__span">Quantity : </span>
            </div>
          </div>

          <div className="line bag__line"></div>

          <div className="bag-price">
            <span className="bag-price__span">Price : </span>
            <button className="bag-price__button">Delete</button>
          </div>

          <div className="line bag__line"></div>

          <div className="bag-total">
            <span className="bag-total__span">Total : € </span>
            <button
              onClick={() => setIsContact(true)}
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
