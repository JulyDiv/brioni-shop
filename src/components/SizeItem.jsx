import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export const SizeItem = ({ jacket }) => {
  const { changeSize } = useContext(AppContext);
  const [activeSize, setActiveSize] = useState();

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
      {/* {jacket.size.map(({ id, sizeName, status }) => (
        <label
          key={id}
          className={
            status === true
              ? "card-info__size-label card-info__size-label--active"
              : "card-info__size-label"
          }
        >
          <input
            className="card-info__size-input"
            type="checkbox"
            onChange={() => checkedSize(id)}
          />
          {sizeName}
        </label>
      ))} */}
    </>
  );
};
