import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export const CharacterDropdownList = ({ item, id }) => {

  const [activeCheckbox, setActiveCheckbox] = useState(false);

  const { jacket } = useContext(AppContext);

  const onClick = () => {
    setActiveCheckbox(true);
    activeCheckbox ? setActiveCheckbox(false) : setActiveCheckbox(true);
  }

  return (
    <>
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
        />
        <div className="checkbox character-dropdown__checkbox"></div>
        {item ? (
          <label htmlFor="character" className="character-dropdown__label">
            {item.label}
          </label>
        ) : (
          ""
        )}
      </div>
    </>
  );
};