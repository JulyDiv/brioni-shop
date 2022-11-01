/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";

export const CharacterMobile = () => {
    return (
      <div className="character-mobile">
        <CharacterButtonMobile name="Color" />
        <CharacterButtonMobile name="Size" />
      </div>
    );
}