import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";

export const CharacterMobileCard = ({ jacket }) => {

  const { changeColor, changeSize, activeColor, setActiveColor, activeSize, setActiveSize } = useContext(AppContext);

  const [dropdownColor, setDropdownColor] = useState(false);
  const [dropdownSize, setDropdownSize] = useState(false);

  const onClick = (item) => {
    dropdownColor ? setActiveColor(item) : setActiveSize(item);
  }

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
            {jacket.color.map((item, id) => (
              <div key={id} className="character-dropdown__option-item">
                <input
                  className={
                    activeColor === item
                      ? "character-dropdown__input character-dropdown__input--active"
                      : "character-dropdown__input"
                  }
                  type="radio"
                  value={item.colorName}
                  name="color"
                  onChange={changeColor}
                  onClick={() => onClick(item)}
                />
                <div className="checkbox character-dropdown__checkbox"></div>
                <label className="character-dropdown__label">
                  {item.colorName}
                </label>
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
          {jacket.size.map((item, id) => (
            <div key={id} className="character-dropdown__option-item">
              <input
                className={
                  activeSize === item
                    ? "character-dropdown__input character-dropdown__input--active"
                    : "character-dropdown__input"
                }
                type="radio"
                value={item}
                name="size"
                onChange={changeSize}
                onClick={() => onClick(item)}
              />
              <div className="checkbox character-dropdown__checkbox"></div>
              <label className="character-dropdown__label">{item}</label>
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
