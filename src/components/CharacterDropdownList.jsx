import React from "react";

export const CharacterDropdownList = ({ item }) => {
  return (
    <div key={item.id} className="character-dropdown__option-item">
      <input
        className="character-dropdown__input"
        type="checkbox"
        id="character"
      />
      <div className="checkbox character-dropdown__checkbox"></div>
      <label htmlFor="character" className="character-dropdown__label">
        {item.label}
      </label>
    </div>
  );
};