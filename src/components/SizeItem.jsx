import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const SizeItem = ({ jacket }) => {
  const { checkedSize } = useContext(AppContext);

  return (
    <>
      {jacket.size.map(({ id, sizeName, status }) => (
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
      ))}
    </>
  );
};
