import React from "react";
import { useState } from "react";
import dbCharacter from "../../DBCharacter";
import { CharacterDropdown } from "../CharacterDropdown/CharacterDropdown";

export const Character = () => {
  const [characterDropdownColor, setCharacterDropdownColor] = useState(false);
  const [characterDropdownSize, setCharacterDropdownSize] = useState(false);
  const [characterDropdownSort, setCharacterDropdownSort] = useState(false);

  const onClickColor = (e) => {
    e.currentTarget.classList.toggle("character__button--active");
    characterDropdownColor
      ? setCharacterDropdownColor(false)
      : setCharacterDropdownColor(true);
  };
  const onClickSize = (e) => {
    e.currentTarget.classList.toggle("character__button--active");
    characterDropdownSize
      ? setCharacterDropdownSize(false)
      : setCharacterDropdownSize(true);
  };
  const onClickSort = (e) => {
    e.currentTarget.classList.toggle("character__button--active");
    characterDropdownSort
      ? setCharacterDropdownSort(false)
      : setCharacterDropdownSort(true);
  };

  return (
    <div className="character">
      <div className="character__color-size">
        <div className="character__block">
          <span className="character__span">Color</span>
          <button
            className="character__button"
            onClick={onClickColor}
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
            onClick={onClickSize}
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
            onClick={onClickSort}
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
