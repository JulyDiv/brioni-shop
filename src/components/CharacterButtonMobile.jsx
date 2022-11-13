/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CharacterButtonMobile = ({ name }) => {
  return (
    <button className="button-mobile character-mobile__button">
      {name}
      <img
        className="character-mobile__image"
        src="/img/arrow-down.svg"
        alt="Image: arrow"
      />
    </button>
  );
};
