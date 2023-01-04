import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { InputContactForm } from "./InputContactForm";

export const ModalContactForm = ({ closeModal, onClick, activeCheckbox }) => {
  const [valueName, setValueName] = useState("");
  const [valueLastname, setValueLastname] = useState("");
  const [valueCountry, setValueCountry] = useState("");
  const [valueCode, setValueCode] = useState("");
  const [valueRegion, setValueRegion] = useState("");
  const [valueCity, setValueCity] = useState("");
  const [valueStreetAddress, setValueStreetAdres] = useState("");
  const [valueAppartment, setValueAppartment] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: valueName,
      lastname: valueLastname,
      country: valueCountry,
      code: valueCode,
      region: valueRegion,
      city: valueCity,
      streetAddress: valueStreetAddress,
      appartment: valueAppartment,
    },
  });

  const onSubmit = (data) => {
    const {
      name,
      lastname,
      country,
      code,
      region,
      city,
      streetAddress,
      appartment,
    } = data;
    closeModal();
    reset();
    console.log(data);
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="contact-sign__title">Shipping address</h3>
        <fieldset className="contact-fieldset">
          <div className="contact-input__block">
            <InputContactForm
              register={register}
              placeholder="First name*"
              item={"name"}
              message="This is a required"
              messageErr="Invalid characters"
              value={/[A-Za-z]+/i}
              errors={errors.name}
            />
          </div>
          <div className="contact-input__block">
            <InputContactForm
              register={register}
              placeholder="Last name*"
              item={"lastname"}
              message="This is a required"
              messageErr="Invalid characters"
              value={/[A-Za-z]+/i}
              errors={errors.lastname}
            />
          </div>
          <div className="contact-input__block">
            <InputContactForm
              register={register}
              placeholder="Country*"
              item={"country"}
              message="This is a required"
              messageErr="Invalid characters"
              value={/[A-Za-z]+/i}
              errors={errors.country}
            />
          </div>
          <div className="contact-input__block">
            <InputContactForm
              register={register}
              placeholder="Postal code*"
              item={"code"}
              message="This is a required"
              messageErr="Invalid characters"
              value={/[A-Za-z]+/i}
              errors={errors.code}
            />
          </div>
          <div className="contact-input__block">
            <InputContactForm
              register={register}
              placeholder="Region*"
              item={"region"}
              message="This is a required"
              messageErr="Invalid characters"
              value={/[A-Za-z]+/i}
              errors={errors.region}
            />
          </div>
          <div className="contact-input__block">
            <InputContactForm
              register={register}
              placeholder="City*"
              item={"city"}
              message="This is a required"
              messageErr="Invalid characters"
              value={/[A-Za-z]+/i}
              errors={errors.city}
            />
          </div>
          <div className="contact-input__block">
            <InputContactForm
              register={register}
              placeholder="Street address*"
              item={"streetAddress"}
              message="This is a required"
              messageErr="Invalid characters"
              value={/[A-Za-z]+/i}
              errors={errors.streetAddress}
            />
          </div>
          <div className="contact-input__block">
            <InputContactForm
              register={register}
              placeholder="Appartment*"
              item={"appartment"}
              message="This is a required"
              messageErr="Invalid characters"
              value={/^[1-9]+[0-9]*$/}
              errors={errors.appartment}
            />
          </div>
        </fieldset>
        <textarea
          name="comment"
          placeholder="Comment"
          rows="8"
          maxLength={500}
          className="contact-input contact-form__comment"
        />

        <div className="contact-info">
          <div className="contact-info__block">
            <h3 className="contact-info__title">Local taxes and Duties</h3>
            <p className="contact-info__text">
              Please note that taxes and duties are not included in the total
              order value. You will be contacted by customs once their shipment
              arrives to settle any charges for final delivery.
            </p>
          </div>

          <div className="contact-info__block">
            <h3 className="contact-info__title">Simplified return process</h3>
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
          className="button-light contact-form__button"
          //onClick={() => closeModal()}
        >
          Proceed to payment
        </button>
      </form>
    </>
  );
};
