import React from "react";
import { useState } from "react";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";
import { CharacterDropdownList } from "../../components/CharacterDropdownList";

export const CharacterMobileCard = ({ jacket }) => {
  const [dropdownColor, setDropdownColor] = useState(false);
  const [dropdownSize, setDropdownSize] = useState(false);
  return (
    <div className="character-mobile">
      <CharacterButtonMobile
        name="Color"
        onClick={() => {
          dropdownColor ? setDropdownColor(false) : setDropdownColor(true);
        }}
      />
      {dropdownColor && (
        <div className="character-media">
          <div className="character-dropdown__option-list">
            {jacket.color.map((color, id) => (
              <CharacterDropdownList color={color} key={id} />
            ))}
          </div>
        </div>
      )}

      <CharacterButtonMobile
        name="Size"
        onClick={() => {
          dropdownSize ? setDropdownSize(false) : setDropdownSize(true);
        }}
      />
      {dropdownSize && (
        <div className="character-media">
          {jacket.size.map((size, id) => (
            <CharacterDropdownList size={size} key={id} />
          ))}
        </div>
      )}
    </div>
  );
};
