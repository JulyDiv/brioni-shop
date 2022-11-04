/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CharacterButtonMobile = ({ name }) => {
  return (
    <button className="button-light button-light__button">
      {name}
      <img
        className="button-light__image"
        src="/img/arrow-down.svg"
        alt="Image: arrow"
      />
    </button>
  );
};
