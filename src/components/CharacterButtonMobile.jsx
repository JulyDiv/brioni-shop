/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CharacterButtonMobile = ({ name, onClick }) => {
  return (
    <button className="button-mobile character-mobile__button" onClick={() => onClick()}>
      {name}
      <img
        className="character-mobile__image"
        src="/img/arrow-down.svg"
        alt="Image: arrow"
      />
    </button>
  );
};
