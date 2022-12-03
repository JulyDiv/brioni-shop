/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ChoiceItem = ({
  choice,
  setActiveChoice
}) => {
  const onClick = (item) => {
    setActiveChoice(item.name);
  };
  return (
    <>
      {choice.map((item) => (
        <img
          key={item.id}
          className="card-choice__image"
          src={item.name}
          alt="Photo: jacket"
          checked={item.status}
          onClick={() => onClick(item)}
        />
      ))}
    </>
  );
};
