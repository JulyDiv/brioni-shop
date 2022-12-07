import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const SizeItem = ({ jacket }) => {
  //console.log("SizeItem:", size);
  const { checkedSize } = useContext(AppContext);
  //console.log(jacket.size);
  return (
    <>
      {jacket.size.map(({ id, sizeName, status }) => (
        <label key={id} className="card-info__size-label">
          <input
            className="card-info__size-input"
            type="checkbox"
            //checked={status}
            onChange={() => checkedSize(id)}
          />
          {sizeName}
        </label>
      ))}
      {/* {size.map((item, i) => (
        <label key={i} className="card-info__size-label">
          <input
            className="card-info__size-input"
            type="checkbox"
            checked={item.status}
            onChange={() => checkedSize(i)}
          />
          {item.name}
        </label>
      ))} */}
    </>
  );
};
