import React from "react";

export const InputContactForm = ({
  register,
  placeholder,
  messageErr,
  item,
  message,
  value,
  errors,
}) => {

  return (
    <>
      <input
        {...register(item, {
          required: {
            value: message ? true : false,
            message: (message),
          },
          pattern: {
            value: value,
            message: (messageErr),
          },
        })}
        style={{ border: errors && "1px solid #421717" }}
        className="contact-input contact-input__input"
        placeholder={placeholder}
      />
      {errors?.message && (
        <span className="contact-input__message">{errors?.message}</span>
      )}
    </>
  );
};