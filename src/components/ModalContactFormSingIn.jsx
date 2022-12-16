import React from "react";
import { useForm } from "react-hook-form";

export const ModalContactFormSingIn = ({ valueEmail, valuePhone }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: { email: valueEmail, phone: valuePhone },
  });
      const onSubmit = (data) => {
        const { email, phone } = data;
        reset();
        console.log(data);
      };
  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-sign">
          <span className="contact-sign__span">
            Do you already have an account?
          </span>{" "}
          <button type="submit" className="contact-sign__button">
            Sign in
          </button>
          <fieldset className="contact-fieldset">
            <div className="contact-input__block">
              <input
                {...register("email", {
                  pattern: {
                    //value: /[A-Za-z]+/i,
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Some parts are missing '@'",
                  },
                })}
                style={{ border: errors.email && "1px solid #421717" }}
                type="email"
                className="contact-input contact-input__input"
                placeholder="Enter e-mail"
              />
              {errors?.email?.message && (
                <span className="contact-input__message">
                  {errors?.email?.message}
                </span>
              )}
            </div>
            <div className="contact-input__block">
              <input
                {...register("phone", {
                  pattern: {
                    value: /^[1-9]+[0-9]*$/,
                    message: "Invalid characters",
                  },
                })}
                style={{ border: errors.phone && "1px solid #421717" }}
                className="contact-input contact-input__input"
                placeholder="Phone number"
              />
              {errors?.phone?.message && (
                <span className="contact-input__message">
                  {errors?.phone?.message}
                </span>
              )}
            </div>
          </fieldset>
        </div>
      </form>
    </>
  );
}