import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { CharacterButtonMobile } from "../../components/CharacterButtonMobile";

export const CharacterMobileCard = ({ jacket }) => {
  const {
    changeColor,
    changeSize,
    activeColor,
    setActiveColor,
    activeSize,
    setActiveSize,
  } = useContext(AppContext);

  const [dropdownColor, setDropdownColor] = useState(false);
  const [dropdownSize, setDropdownSize] = useState(false);

  const closeCharacter = () => {
    const closeBtn = document.querySelector(".character-media");
    closeBtn.classList.toggle("character-media--hidden");
  };

  const closeDropdownColor = (e) => {
    e.currentTarget.classList.toggle("character-mobile__button--active");
    if (dropdownColor) {
      setTimeout(() => {
        setDropdownColor(false);
      }, 300);
      closeCharacter();
    }
    if (!dropdownColor) setDropdownColor(true);
  };

  const closeDropdownSize = (e) => {
    e.currentTarget.classList.toggle("character-mobile__button--active");
    if (dropdownSize) {
      setTimeout(() => {
        setDropdownSize(false);
      }, 300);
      closeCharacter();
    }
    if (!dropdownSize) setDropdownSize(true);
  };

  const onClick = (item) => {
    dropdownColor ? setActiveColor(item) : setActiveSize(item);
  };

  return (
    <div className="character-mobile">
      <CharacterButtonMobile
        name="Color"
        onClick={(e) => closeDropdownColor(e)}
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
        onClick={(e) => closeDropdownSize(e)}
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
    </div>
  );
};
