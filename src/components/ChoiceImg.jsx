/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ChoiceImg = ({ item, id, checkedChoice, index }) => {
    console.log(item);
  return (
    <>
      <img
        id={item.id}
        key={id}
        className="card-choice__image"
        src={item.name}
        alt="Photo: jacket"
        checked={item.status}
        onClick={() => checkedChoice(index)}
      />
    </>
  );
};
