/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { ModalContactFormSingIn } from "../../components/ModalContactFormSingIn";
import { ModalContactForm } from "../../components/ModalContactForm";

export const ModalContact = ({ setIsContact, setIsThank, isContact }) => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);
  const [valueEmail, setValueEmail] = useState("");
  const [valuePhone, setValuePhone] = useState("");

  const onClick = () => {
    setActiveCheckbox(true);
    activeCheckbox ? setActiveCheckbox(false) : setActiveCheckbox(true);
  };

  const closeModal = () => {
    setIsContact(false);
    setIsThank(true);
  };

  const closeContact = () => {
    setTimeout(() => {
      setIsContact(false);
    }, 500);
    const closeBtn = document.querySelector(".contact");
    closeBtn.classList.toggle("contact--hidden");
  };

  return (
    <>
      <ModalOverlay setIsContact={setIsContact} isContact={isContact} />
      <div className="contact">
        <div className="contact-wrapper">
          <div className="contact-title">
            <h2 className="contact-title__title">Contact Information</h2>
            <button
              onClick={() => closeContact()}
              className="close-button contact-title__button"
            >
              <img
                src="/img/close-search.svg"
                alt="close"
                className="contact-title__image"
              />
            </button>
          </div>
          <ModalContactFormSingIn
            valueEmail={valueEmail}
            valuePhone={valuePhone}
          />
          <ModalContactForm
            activeCheckbox={activeCheckbox}
            onClick={onClick}
            closeModal={closeModal}
          />
        </div>
      </div>
    </>
  );
};
