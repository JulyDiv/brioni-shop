/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ChoiceItem = ({ choice }) => {
  return (
    <div className="card-choice">
      {choice.map((item) => (
        <div key={item.id}>
          <img
            className="card-choice__image"
            src={item.name}
            alt="Photo: jacket"
          />
        </div>
      ))}
    </div>
  );
};
