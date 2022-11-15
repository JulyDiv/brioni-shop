import React from "react";
import { useState } from "react";
import dbCharacter from "../../DBCharacter";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";
import { CharacterDropdown } from "../../modules/CharacterDropdown/CharacterDropdown";

export const CharacterMobileCatalog = () => {
  const [dropdownFilter, setDropdownFilter] = useState(false);
  const [dropdownSort, setDropdownSort] = useState(false);
  // const onClick = () => {
  //   dropdownFilter ? setDropdownFilter(false) : setDropdownFilter(true);
  // }
  return (
    <div className="character-mobile">
      <CharacterButtonMobile
        name="Filter"
        // onClick={onClick}
        onClick={() => {
          dropdownFilter ? setDropdownFilter(false) : setDropdownFilter(true);
        }}
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
        onClick={() => {
          dropdownSort ? setDropdownSort(false) : setDropdownSort(true);
        }}
      />
      {dropdownSort && (
        <div className="character-media">
          <CharacterDropdown itemList={dbCharacter.sort} />
        </div>
      )}
    </div>
  );
};
