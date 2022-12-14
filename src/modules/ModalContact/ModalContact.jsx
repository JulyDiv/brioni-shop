/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
//import { useForm } from "react-hook-form";
//import { InputContact } from "../../components/InputContact";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
//import { useForm } from "react-hook-form";

export const ModalContact = ({ setIsContact, setIsThank, isContact }) => {
  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm();
  // const onSubmit = (data) => console.log(data);
  const [activeCheckbox, setActiveCheckbox] = useState(false);
  const [valueEmail, setValueEmail] = useState("");

  const onClick = () => {
    setActiveCheckbox(true);
    activeCheckbox ? setActiveCheckbox(false) : setActiveCheckbox(true);
  };

  const closeModal = () => {
    setIsContact(false);
    setIsThank(true);
  };

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onBlur",
  //   defaultValues: { email: valueEmail },
  // });
  // const onSubmit = () => {
  // };
  //onSubmit={handleSubmit(onSubmit)}
  return (
    <>
      <ModalOverlay setIsContact={setIsContact} isContact={isContact} />
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
                <input
                  // {...register("email", {
                  //   required: {
                  //     value: true,
                  //     message: "Поле обязательно для заполнения",
                  //   },
                  //   maxLength: {
                  //     value: 20,
                  //     message: "Количество символов до 20-ти",
                  //   },
                  //   pattern: {
                  //     value: /[A-Za-z]+/i,
                  //     message: "Неверные символы",
                  //   },
                  // })}
                  // style={{ border: errors.email && "1px solid red" }}
                  type="email"
                  className="contact-input contact-input__input"
                  placeholder="Enter e-mail"
                />
                {/* {errors?.email?.message && (
                  <p style={{ color: "red" }}>{errors?.email?.message}</p>
                )} */}
                <input
                  type="number"
                  className="contact-input contact-input__input"
                  placeholder="Phone number"
                />
                {/* <InputContact placeholder="Enter e-mail" />
                <InputContact placeholder="Phone number" /> */}
              </fieldset>
              <h3 className="contact-sign__title">Shipping address</h3>
              <fieldset className="contact-fieldset">
                <input
                  type="text"
                  className="contact-input contact-input__input"
                  placeholder="First name"
                />
                <input
                  type="text"
                  className="contact-input contact-input__input"
                  placeholder="Last name"
                />
                <input
                  type="text"
                  className="contact-input contact-input__input"
                  placeholder="Country"
                />
                <input
                  type="number"
                  className="contact-input contact-input__input"
                  placeholder="Postal code"
                />
                <input
                  type="text"
                  className="contact-input contact-input__input"
                  placeholder="Region"
                />
                <input
                  type="text"
                  className="contact-input contact-input__input"
                  placeholder="City"
                />
                <input
                  type="text"
                  className="contact-input contact-input__input"
                  placeholder="Street address"
                />
                <input
                  type="text"
                  className="contact-input contact-input__input"
                  placeholder="Appartment"
                />
                {/* <InputContact placeholder="First name" />
                <InputContact placeholder="Last name" />
                <InputContact placeholder="Country" />
                <InputContact placeholder="Postal code" />

                <InputContact placeholder="Region" />
                <InputContact placeholder="City" />

                <InputContact placeholder="Street address" />
                <InputContact placeholder="Appartment" /> */}
              </fieldset>
              <textarea
                name="#"
                placeholder="Comment"
                rows="8"
                maxLength={710}
                className="contact-input contact-form__comment"
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
                className={
                  activeCheckbox
                    ? "contact-checkbox__input contact-checkbox__input--active"
                    : "contact-checkbox__input"
                }
                type="checkbox"
                onClick={() => onClick()}
              />
              <span className="contact-checkbox__span">
                <Link href="#" className="contact-checkbox__link">
                  I agree to the
                </Link>{" "}
                processing of personal data
              </span>
            </div>

            <button
              type="submit"
              onClick={() => closeModal()}
              //disabled
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
