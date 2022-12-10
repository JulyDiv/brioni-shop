import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export const CharacterDropdownList = ({ item, color, id, size, status, checkedColor }) => {
  //const { checkedColor } = useContext(AppContext);

  const [activeCheckbox, setActiveCheckbox] = useState(false);

  const onClick = () => {
    setActiveCheckbox(true);
    activeCheckbox ? setActiveCheckbox(false) : setActiveCheckbox(true);
  }
console.log(color);
  return (
    <>
      {/* <div key={id} className="character-dropdown__option-item">
        <input
          className={
            activeCheckbox
              ? "character-dropdown__input character-dropdown__input--active"
              : "character-dropdown__input"
          }
          type="checkbox"
          onChange={() => onClick()}
        />
        <div className="checkbox character-dropdown__checkbox"></div>
        {item ? (
          <label className="character-dropdown__label">{item.label}</label>
        ) : (
          ""
        )}
        {color ? (
            <label className="character-dropdown__label">
              {color.colorName}
            </label>
        ) : (
          ""
        )}
        {size ? (
          <label className="character-dropdown__label">
            {size.sizeName}
          </label>
        ) : (
          ""
        )}
      </div> */}
      <div key={id} className="character-dropdown__option-item">
        <input
          className={
            activeCheckbox
              ? "character-dropdown__input character-dropdown__input--active"
              : "character-dropdown__input"
          }
          type="checkbox"
          id="character"
          onClick={() => onClick()}
          onChange={() => checkedColor(id)}
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
    </>
  );
};