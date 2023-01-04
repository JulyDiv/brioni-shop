import React from "react";
import { useForm } from "react-hook-form";
import { InputContactForm } from "./InputContactForm";

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
              <InputContactForm
                register={register}
                placeholder="Enter e-mail"
                item={"email"}
                messageErr="Some parts are missing '@'"
                value={
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                }
                errors={errors.email}
              />
            </div>
            <div className="contact-input__block">
              <InputContactForm
                register={register}
                placeholder="Phone number"
                item={"phone"}
                messageErr="Invalid characters"
                value={/^[1-9]+[0-9]*$/}
                errors={errors.phone}
              />
            </div>
          </fieldset>
        </div>
      </form>
    </>
  );
}