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
            <input
              {...register("email", {
                pattern: {
                  //value: /[A-Za-z]+/i,
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address",
                },
              })}
              style={{ border: errors.email && "1px solid #421717" }}
              //type="email"
              className="contact-input contact-input__input"
              placeholder="Enter e-mail"
            />
            {errors?.email?.message && (
              <p style={{ color: "#421717" }}>{errors?.email?.message}</p>
            )}
            <input
              {...register("phone", {
                pattern: {
                  value: [0 - 9],
                  message: "Неверные символы",
                },
              })}
              style={{ border: errors.phone && "1px solid #421717" }}
              //type="number"
              className="contact-input contact-input__input"
              placeholder="Phone number"
            />
            {errors?.phone?.message && (
              <p style={{ color: "#421717" }}>{errors?.phone?.message}</p>
            )}
          </fieldset>
        </div>
      </form>
    </>
  );
}