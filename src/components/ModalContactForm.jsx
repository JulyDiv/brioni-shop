import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

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
          <input
            {...register("name", {
              required: {
                value: true,
                message: "This is a required",
              },
              pattern: {
                value: /[A-Za-z]+/i,
                message: "Invalid characters",
              },
            })}
            style={{ border: errors.name && "1px solid #421717" }}
            className="contact-input contact-input__input"
            placeholder="First name"
          />
          {errors?.name?.message && (
            <p style={{ color: "#421717" }}>{errors?.name?.message}</p>
          )}
          <input
            {...register("lastname", {
              required: {
                value: true,
                message: "This is a required",
              },
              pattern: {
                value: /[A-Za-z]+/i,
                message: "Invalid characters",
              },
            })}
            style={{ border: errors.lastname && "1px solid #421717" }}
            className="contact-input contact-input__input"
            placeholder="Last name"
          />
          {errors?.lastname?.message && (
            <p style={{ color: "#421717" }}>{errors?.lastname?.message}</p>
          )}
          <input
            {...register("country", {
              required: {
                value: true,
                message: "This is a required",
              },
              pattern: {
                value: /[A-Za-z]+/i,
                message: "Invalid characters",
              },
            })}
            style={{ border: errors.country && "1px solid #421717" }}
            className="contact-input contact-input__input"
            placeholder="Country"
          />
          {errors?.country?.message && (
            <p style={{ color: "#421717" }}>{errors?.country?.message}</p>
          )}
          <input
            {...register("code", {
              required: {
                value: true,
                message: "This is a required",
              },
              pattern: {
                value: /[A-Za-z]+/i,
                message: "Invalid characters",
              },
            })}
            style={{ border: errors.code && "1px solid #421717" }}
            className="contact-input contact-input__input"
            placeholder="Postal code"
          />
          {errors?.code?.message && (
            <p style={{ color: "#421717" }}>{errors?.code?.message}</p>
          )}
          <input
            {...register("region", {
              required: {
                value: true,
                message: "This is a required",
              },
              pattern: {
                value: /[A-Za-z]+/i,
                message: "Invalid characters",
              },
            })}
            style={{ border: errors.region && "1px solid #421717" }}
            className="contact-input contact-input__input"
            placeholder="Region"
          />
          {errors?.region?.message && (
            <p style={{ color: "#421717" }}>{errors?.region?.message}</p>
          )}
          <input
            {...register("city", {
              required: {
                value: true,
                message: "This is a required",
              },
              pattern: {
                value: /[A-Za-z]+/i,
                message: "Invalid characters",
              },
            })}
            style={{ border: errors.city && "1px solid #421717" }}
            className="contact-input contact-input__input"
            placeholder="City"
          />
          {errors?.city?.message && (
            <p style={{ color: "#421717" }}>{errors?.city?.message}</p>
          )}
          <input
            {...register("streetAddress", {
              required: {
                value: true,
                message: "This is a required",
              },
              pattern: {
                value: /[A-Za-z]+/i,
                message: "Invalid characters",
              },
            })}
            style={{ border: errors.streetAddress && "1px solid #421717" }}
            className="contact-input contact-input__input"
            placeholder="Street address"
          />
          {errors?.streetAddress?.message && (
            <p style={{ color: "#421717" }}>{errors?.streetAddress?.message}</p>
          )}
          <input
            {...register("appartment", {
              required: {
                value: true,
                message: "This is a required",
              },
              pattern: {
                value: /[A-Za-z]+/i,
                message: "Invalid characters",
              },
            })}
            style={{ border: errors.appartment && "1px solid #421717" }}
            className="contact-input contact-input__input"
            placeholder="Appartment"
          />
          {errors?.appartment?.message && (
            <p style={{ color: "#421717" }}>{errors?.appartment?.message}</p>
          )}
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
