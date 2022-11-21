/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ChoiceItem = ({ choice }) => {
  return (
    <div className="card-choice">
      {choice.map((item) => (
          <img
            key={item.id}
            className="card-choice__image"
            src={item.name}
            alt="Photo: jacket"
          />
      ))}
    </div>
  );
};
