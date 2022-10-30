import React from "react";
import { CharacterDropdownList } from "../../components/CharacterDropdownList";

export const CharacterDropdown = ({ itemList }) => {

  return (
      <div className="character-dropdown__option-list">
        {itemList.map((item, id) => (
          <CharacterDropdownList key={id} item={item} />
        ))}
      </div>
  );
};
