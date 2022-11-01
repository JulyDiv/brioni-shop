/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CharacterButtonMobile = ({ name }) => {
  return (
    <button class="button-light button-light__button">
      {name}
      <img
        class="button-light__image"
        src="img/arrow-down.svg"
        alt="Image: arrow"
      />
    </button>
  );
};
