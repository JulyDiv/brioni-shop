import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Count = () => {
  const { count } = useContext(AppContext);
  //const card = useContext(AppContext);

  //console.log("count", card.count);
  //console.log("count", count.count);
  return (
    <div className="count">
      <button
        className="count__button"
        onClick={() => count.setCount(count.count - 1)}
        disabled={count.count <= 1}
      >
        -
      </button>
      <input
        className="count__input"
        type="number"
        min="0"
        value={count.count < 1 ? 1 : count.count}
        disabled
        //onChange={count.onChange}
      />
      <button
        className="count__button"
        onClick={() => count.setCount(count.count + 1)}
      >
        +
      </button>
    </div>
  );
};
