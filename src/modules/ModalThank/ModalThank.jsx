/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

export const ModalThank = ({ setIsThank, isThank }) => {
  return (
    <>
      <ModalOverlay setIsThank={setIsThank} isThank={isThank} />
      <div className="thank">
        <div className="thank-wrapper">
          <div className="thank-block">
            <span className="thank-block__span">
              Product Code UJIG0LO16031100
            </span>
            <button
              onClick={() => setIsThank(false)}
              className="close-button thank-block__button"
            >
              <img
                src="/img/close-search.svg"
                alt="close"
                className="thank-block__image"
              />
            </button>
          </div>
          <h2 className="thank__title">Thank you for your order!</h2>
          <div className="thank-info">
            <p className="thank-info__text">
              Thank you for your order, we hope you enjoy shopping with us! All
              order and delivery information has been sent to you by email.
            </p>
            <p className="thank-info__text">
              If you have any questions about an order or delivery, please
              contact us by writing to{" "}
              <Link href="#" className="thank-info__link">
                our e-mail.
              </Link>
            </p>
          </div>
          <form className="thank-form">
            <h2 className="thank-form__title">
              Subscribe to <Link href="/" className="thank-form__link">Brioni</Link> news
            </h2>
            <div className="thank-form__block">
              <input
                type="text"
                className="thank-form__input"
                placeholder="Enter e-mail"
              />
              <div className="thank-form__image"></div>
            </div>
            <button
              type="submit"
              className="button-light thank-form__button"
              onClick={() => setIsThank(false)}
            >
              Finish
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
