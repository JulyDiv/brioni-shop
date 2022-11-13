/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { InputContact } from "../../components/InputContact";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { ContactInfoBlock } from "../../components/ContactInfoBlock";

export const ModalContact = ({ setIsContact, setIsThank }) => {
  return (
    <>
      <ModalOverlay />
      <div className="contact">
        <div className="contact-wrapper">
          <div className="contact-title">
            <h2 className="contact-title__title">Contact Information</h2>
            <button
              onClick={() => setIsContact(false)}
              className="close-button contact-title__button"
            >
              <img
                src="/img/close-search.svg"
                alt="close"
                className="contact-title__image"
              />
            </button>
          </div>

          <form className="contact-form">
            <div className="contact-sign">
              <span className="contact-sign__span">
                Do you already have an account?
              </span>
              <Link href="#" className="contact-sign__link">
                {" "}
                Sign in
              </Link>
              <fieldset className="contact-fieldset">
                <InputContact placeholder="Enter e-mail" />
                <InputContact placeholder="Phone number" />
              </fieldset>
              <div className="contact__line"></div>
              <h3 className="contact-sign__title">Shipping address</h3>
              <fieldset className="contact-fieldset">
                <InputContact placeholder="First name" />
                <InputContact placeholder="Last name" />
                <InputContact placeholder="Country" />
                <InputContact placeholder="Postal code" />

                <InputContact placeholder="Region" />
                <InputContact placeholder="City" />

                <InputContact placeholder="Street address" />
                <InputContact placeholder="Appartment" />
              </fieldset>
              <textarea
                name="#"
                placeholder="Comment"
                className="contact-input contact__comment"
              />
            </div>

            <div className="contact-info">
              <div className="contact-info__block">
                <h3 className="contact-info__title">Local taxes and Duties</h3>
                <p className="contact-info__text">
                  Please note that taxes and duties are not included in the
                  total order value. You will be contacted by customs once their
                  shipment arrives to settle any charges for final delivery.
                </p>
              </div>

              <div className="contact-info__block">
                <h3 className="contact-info__title">
                  Simplified return process
                </h3>
                <p className="contact-info__text">
                  Returns are accepted within 30 days of delivery in the{" "}
                  <Link href="#" className="contact-info__link">
                    Customer Service section.
                  </Link>{" "}
                  Please see our{" "}
                  <Link href="#" className="contact-info__link">
                    Return Policy <br /> for full details.
                  </Link>
                </p>
              </div>
            </div>

            <div className="contact-checkbox">
              <input
                className="checkbox contact-checkbox__input"
                type="checkbox"
              />
              <span className="contact-checkbox__span">
                <Link href="#" className="contact-checkbox__link">
                  I agree to the
                </Link>{" "}
                processing of personal data
              </span>
            </div>

            <button
              onClick={() => setIsThank(true)}
              className="button-light contact-form__button"
            >
              Proceed to payment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
