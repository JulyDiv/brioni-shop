/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ChoiceImg } from "./ChoiceImg";

export const ChoiceItem = ({ choice, checkedChoice, setActiveChoice, activeChoice }) => {
  //console.log(choice);
  //console.log(item);
  console.log(activeChoice);

  const onClick = (id, item) => {
    checkedChoice(id);
    //setActiveChoice(true);
    setActiveChoice(item.name);
  }
  return (
    <>
      <div className="card-choice">
        {choice.map((item, id, index) => (
          <>
            {/* <ChoiceImg key={id} item={item} checkedChoice={checkedChoice} index={index} /> */}
            <img
              //id={id}
              key={id}
              className="card-choice__image"
              src={item.name}
              alt="Photo: jacket"
              checked={item.status}
              onClick={() => onClick(id, item)}
            />
          </>
        ))}
      </div>
      <figure className="card-main">
        <img
        className="card-main__image"
        src={activeChoice}
        alt="Photo: jacket"
      />
      </figure>
    </>
  );
};
