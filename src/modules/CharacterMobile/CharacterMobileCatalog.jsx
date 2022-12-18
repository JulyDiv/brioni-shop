import React, { useState } from "react";
import dbCharacter from "../../DBCharacter";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";
import { CharacterDropdown } from "../CharacterDropdown/CharacterDropdown";

export const CharacterMobileCatalog = () => {
  const [dropdownFilter, setDropdownFilter] = useState(false);
  const [dropdownSort, setDropdownSort] = useState(false);

  const closeCharacter = () => {
    const closeBtn = document.querySelector(".character-media");
    closeBtn.classList.toggle("character-media--hidden");
  };

  const onClickFilter = (e) => {
    e.currentTarget.classList.toggle("character-mobile__button--active");
    if (dropdownFilter) {
      setTimeout(() => {
        setDropdownFilter(false);
      }, 300);
      closeCharacter();
    }
    if (!dropdownFilter) setDropdownFilter(true);
  };
  const onClickSort = (e) => {
    e.currentTarget.classList.toggle("character-mobile__button--active");
    if (dropdownSort) {
      setTimeout(() => {
        setDropdownSort(false);
      }, 300);
      closeCharacter();
    }
    if (!dropdownSort) setDropdownSort(true);
  };

  return (
    <div className="character-mobile">
      <CharacterButtonMobile name="Filter" onClick={onClickFilter} />
      {dropdownFilter && (
        <div className="character-media">
          <span className="character-media__span">Color</span>
          <CharacterDropdown itemList={dbCharacter.color} />
          <div className="line character-media__line"></div>
          <span className="character-media__span">Size</span>
          <CharacterDropdown itemList={dbCharacter.size} />
        </div>
      )}

      <CharacterButtonMobile name="Sort" onClick={onClickSort} />
      {dropdownSort && (
        <div className="character-media">
          <CharacterDropdown itemList={dbCharacter.sort} />
        </div>
      )}
    </div>
  );
};
