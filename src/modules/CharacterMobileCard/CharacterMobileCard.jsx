import React from "react";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";

export const CharacterMobileCard = ({ jacket }) => {
    return (
      <div className="character-mobile">
        <CharacterButtonMobile name="Color" />
        <CharacterButtonMobile name="Size" />
      </div>
    );
}