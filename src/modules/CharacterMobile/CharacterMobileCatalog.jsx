import React from "react";
import { useState } from "react";
import dbCharacter from "../../DBCharacter";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";
import { CharacterDropdown } from "../CharacterDropdown/CharacterDropdown";

export const CharacterMobileCatalog = () => {
  const [dropdownFilter, setDropdownFilter] = useState(false);
  const [dropdownSort, setDropdownSort] = useState(false);

  const onClickFilter = (e) => {
    e.currentTarget.classList.toggle("character-mobile__button--active");
    dropdownFilter ? setDropdownFilter(false) : setDropdownFilter(true);
  };
  const onClickSort = (e) => {
    e.currentTarget.classList.toggle("character-mobile__button--active");
    dropdownSort ? setDropdownSort(false) : setDropdownSort(true);
  };

  return (
    <div className="character-mobile">
      <CharacterButtonMobile
        name="Filter"
        onClick={onClickFilter}
      />
      {dropdownFilter && (
        <div className="character-media">
          <span className="character-media__span">Color</span>
          <CharacterDropdown itemList={dbCharacter.color} />
          <div className="line character-media__line"></div>
          <span className="character-media__span">Size</span>
          <CharacterDropdown itemList={dbCharacter.size} />
        </div>
      )}

      <CharacterButtonMobile
        name="Sort"
        onClick={onClickSort}
      />
      {dropdownSort && (
        <div className="character-media">
          <CharacterDropdown itemList={dbCharacter.sort} />
        </div>
      )}
    </div>
  );
};
