/* eslint-disable @next/next/no-img-element */
import React, { use, useState } from "react";

export const ChoiceItem = ({
  choice,
  setActiveChoice
}) => {

  //const [isChoice, setIsChoice] = useState(activeChoice);

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
