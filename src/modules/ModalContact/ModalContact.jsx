/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export const ModalContact = () => {
    return (
      <div className="contacts">
        <div className="contacts-wrapper">
          <div className="contacts-title">
            <h2 className="contacts-title__title">Contact Information</h2>
            <button
              onClick={() => setContact(false)}
              className="close-button contacts-title__button"
            >
              <img
                src="img/close-search.svg"
                alt="close"
                className="contacts-title__image"
              />
            </button>
          </div>

          <div className="contacts-sign">
            <span className="contacts-sign__span">
              Do you already have an account?
            </span>
            <Link href="#">
              <a className="contacts-sign__link">Sign in</a>
            </Link>

            <form action="#" className="contacts-form contacts-sign__form">
              <input
                type="text"
                className="input contacts-input contacts-sign__input"
                placeholder="Enter e-mail"
              />
              <input
                type="text"
                className="input contacts-input contacts-sign__input"
                placeholder="Phone number"
              />
            </form>

            <div className="contacts__line"></div>

            <div className="contacts-address">
              <h3 className="contacts-address__title">Shipping address</h3>

              <form action="#" className="contacts-form contacts-address__form">
                <input
                  type="text"
                  className="input contacts-input contacts-address__input"
                  placeholder="First name"
                />
                <input
                  type="text"
                  className="input contacts-input contacts-address__input"
                  placeholder="Last name"
                />
              </form>
              <form action="#" className="contacts-form contacts-address__form">
                <input
                  type="text"
                  className="input contacts-input contacts-address__input"
                  placeholder="Country"
                />
                <input
                  type="text"
                  className="input contacts-input contacts-address__input"
                  placeholder="Postal code"
                />
              </form>
              <form action="#" className="contacts-form contacts-address__form">
                <input
                  type="text"
                  className="input contacts-input contacts-address__input"
                  placeholder="Region"
                />
                <input
                  type="text"
                  className="input contacts-input contacts-address__input"
                  placeholder="City"
                />
              </form>
              <form action="#" className="contacts-form contacts-address__form">
                <input
                  type="text"
                  className="input contacts-input contacts-address__input"
                  placeholder="Street address"
                />
                <input
                  type="text"
                  className="input contacts-input contacts-address__input"
                  placeholder="Appartment"
                />
              </form>
              <textarea
                name="#"
                placeholder="Comment"
                className="input contacts-input contacts-address__comment"
              ></textarea>
            </div>
          </div>

          <div className="contacts-info">
            <div className="contacts-info__block">
              <h3 className="contacts-info__title">Local taxes and Duties</h3>
              <p className="contacts-info__text">
                Please note that taxes and duties are not included in the total
                order value. You will be contacted by customs once their
                shipment arrives to settle any charges for final delivery.
              </p>
            </div>
            <div className="contacts-info__block">
              <h3 className="contacts-info__title">
                Simplified return process
              </h3>
              <p className="contacts-info__text">
                Returns are accepted within 30 days of delivery in the
                <Link href="#">
                  <a className="contacts-info__link">
                    Customer Service section.
                  </a>
                </Link>
                Please see our
                <Link href="#">
                  <a className="contacts-info__link">
                    Return Policy for full details.
                  </a>
                </Link>
              </p>
            </div>
          </div>

          <div className="contacts-checkbox">
            <input
              className="checkbox contacts-checkbox__input"
              type="checkbox"
            />
            <span className="contacts-checkbox__span">
              <Link href="#">
                <a className="contacts-checkbox__link">I agree to the</a>
              </Link>
              processing of personal data
            </span>
          </div>
          <button
            onClick={() => setThank(true)}
            className="contacts-button contacts__button"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    );
}