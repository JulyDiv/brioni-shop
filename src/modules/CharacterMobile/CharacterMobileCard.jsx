import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";
import { CharacterDropdownList } from "../../components/CharacterDropdownList";

export const CharacterMobileCard = ({ jacket }) => {
  const { checkedColor, checkedSize } = useContext(AppContext);
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
            {jacket.color.map(({ id, colorName, status }) => (
              <div key={id} className="character-dropdown__option-item">
                <input
                  className={
                    status === true
                      ? "character-dropdown__input character-dropdown__input--active"
                      : "character-dropdown__input"
                  }
                  type="checkbox"
                  onChange={() => checkedColor(id)}
                />
                <div className="checkbox character-dropdown__checkbox"></div>
                <label className="character-dropdown__label">{colorName}</label>
              </div>
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
          {jacket.size.map(({ sizeName, id, status }) => (
            <div key={id} className="character-dropdown__option-item">
              <input
                className={
                  status === true
                    ? "character-dropdown__input character-dropdown__input--active"
                    : "character-dropdown__input"
                }
                type="checkbox"
                onChange={() => checkedSize(id)}
              />
              <div className="checkbox character-dropdown__checkbox"></div>
              <label className="character-dropdown__label">{sizeName}</label>
            </div>
          ))}
        </div>
      )}
      {/* {dropdownColor && (
        <div className="character-media">
          <div className="character-dropdown__option-list">
            {jacket.color.map((color, id) => (
              <CharacterDropdownList color={color} key={id} checkedColor={checkedColor} />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};
