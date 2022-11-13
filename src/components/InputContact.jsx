import React from "react";

export const InputContact = ({ placeholder }) => {
    return (
      <>
        <input
          type="text"
          className="contact-input contact-input__input"
          placeholder={placeholder}
        />
      </>
    );
}