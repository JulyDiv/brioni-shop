import React from "react";

export const CharacterDropdownList = ({ item, color, id, size }) => {
  return (
    <div key={id} className="character-dropdown__option-item">
      <input
        className="character-dropdown__input"
        type="checkbox"
        id="character"
      />
      <div className="checkbox character-dropdown__checkbox"></div>
      {item ? (
        <label htmlFor="character" className="character-dropdown__label">
          {item.label}
        </label>
      ) : (
        ""
      )}
      {color ? (
        <label htmlFor="character" className="character-dropdown__label">
          {color.colorName}
        </label>
      ) : (
        ""
      )}
      {size ? (
        <label htmlFor="character" className="character-dropdown__label">
          {size}
        </label>
      ) : (
        ""
      )}
    </div>
  );
};