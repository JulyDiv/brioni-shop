import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { ErrorModal } from "../modules/ErrorModal/ErrorModal";

export const SizeItem = ({ jacket }) => {
  const { changeSize, activeSize, setActiveSize, isErrorModal } = useContext(AppContext);

  const onClick = (item) => {
    setActiveSize(item);
  }

  return (
    <>
      {jacket.size.map((item, id) => (
        <label
          key={id}
          className={
            activeSize === item
              ? "card-info__size-label card-info__size-label--active"
              : "card-info__size-label"
          }
          onClick={() => onClick(item)}
        >
          <input
            className="card-info__size-input"
            type="radio"
            value={item}
            name="size"
            onChange={changeSize}
          />
          {item}
        </label>
      ))}
    </>
  );
};
