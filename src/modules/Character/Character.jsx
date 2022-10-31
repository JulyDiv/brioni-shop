import React from "react";
import { useState } from "react";
import dbCharacter from "../../DBCharacter";
import { CharacterDropdown } from "../CharacterDropdown/CharacterDropdown";

export const Character = () => {
  const [characterDropdownColor, setCharacterDropdownColor] = useState(false);
  const [characterDropdownSize, setCharacterDropdownSize] = useState(false);
  const [characterDropdownSort, setCharacterDropdownSort] = useState(false);
  return (
    <div className="character">
      <div className="character__color-size">
        <div className="character__block">
          <span className="character__span">Color</span>
          <button
            className="character__button"
            onClick={() => {
              characterDropdownColor
                ? setCharacterDropdownColor(false)
                : setCharacterDropdownColor(true);
            }}
          ></button>
        </div>
        {characterDropdownColor && (
          <div className="character-dropdown character-dropdown__color">
            <CharacterDropdown itemList={dbCharacter.color} />
          </div>
        )}
        <div className="character__block">
          <span className="character__span">Size</span>
          <button
            className="character__button"
            onClick={() => {
              characterDropdownSize
                ? setCharacterDropdownSize(false)
                : setCharacterDropdownSize(true);
            }}
          ></button>
        </div>
        {characterDropdownSize && (
          <div className="character-dropdown character-dropdown__size">
            <CharacterDropdown itemList={dbCharacter.size} />
          </div>
        )}
      </div>

      <div className="character__sort-block">
        <div className="character__block">
          <span className="character__span">Sort</span>
          <button
            className="character__button"
            onClick={() => {
              characterDropdownSort
                ? setCharacterDropdownSort(false)
                : setCharacterDropdownSort(true);
            }}
          ></button>
        </div>
      </div>
      {characterDropdownSort && (
        <div className="character-dropdown character-dropdown__sort">
          <CharacterDropdown itemList={dbCharacter.sort} />
        </div>
      )}
    </div>
  );
};
