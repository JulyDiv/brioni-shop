/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CharacterButtonMobile = ({ name, onClick }) => {
  return (
    <button
      className="button-mobile character-mobile__button"
      onClick={(e) => onClick(e)}
    >
      {name}
    </button>
  );
};
