import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Count = () => {

  const { count } = useContext(AppContext);

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
