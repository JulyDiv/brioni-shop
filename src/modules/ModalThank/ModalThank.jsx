/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export const ModalThank = ({ setThank }) => {
  return (
    <div className="thank">
      <div className="thank-wrapper">
        <div className="thank-block">
          <span className="thank-block__span">
            Product Code UJIG0LO16031100
          </span>
          <button
            onClick={() => setThank(true)}
            className="close-button thank-block__button"
          >
            <img
              src="img/close-search.svg"
              alt="close"
              className="thank-block__image"
            />
          </button>
        </div>

        <div className="thank-info">
          <h2 className="thank-info__title">Thank you for your order!</h2>
          <p className="thank-info__text">
            Thank you for your order, we hope you enjoy shopping with us! All
            order and delivery information has been sent to you by email.
          </p>
          <p className="thank-info__text">
            If you have any questions about an order or delivery, please contact
            us by writing to
            <Link href="#">
              <a className="thank-info__link">our e-mail.</a>
            </Link>
          </p>
        </div>

        <div className="thank-form">
          <h2 className="thank-form__title">Subscribe to Brioni news</h2>
          <form action="#" className="contacts-form thank-form__form">
            <input
              type="text"
              className="input contacts-input thank-form__input"
              placeholder="Enter e-mail"
            />
            <img
              src="img/footer-form__email.svg"
              alt="e-mail"
              className="thank-form__image"
            />
          </form>
        </div>
        <button className="contacts-button thank__button">FINISH</button>
      </div>
    </div>
  );
};
