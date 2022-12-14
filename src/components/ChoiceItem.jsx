/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ChoiceItem = ({ choice, setActiveChoice, changeChoice, jacket }) => {

  const onClick = (item) => {
    setActiveChoice(item);
  };

  return (
    <>
      {jacket.choice.map((item, id) => (
        <label key={id} className="card-choice__label">
          <img
            className={
              choice === item
                ? "card-choice__image card-choice__image--active"
                : "card-choice__image"
            }
            src={item}
            alt="Photo: jacket"
            onClick={() => onClick(item)}
          />
          <input
            className="card-info__size-input"
            type="radio"
            value={item}
            name="choice"
            //status={choice === item}
            onChange={changeChoice}
          />
        </label>
      ))}
    </>
  );
};
