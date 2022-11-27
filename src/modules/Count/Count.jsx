import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import useCount from "../../hooks/useCount";

export const Count = () => {
  //const { count, setCount, onChange } = useCount();
  const card = useContext(AppContext);

//console.log(card.count);
  return (
    <div className="count">
      <button
        className="count__button"
        onClick={() => card.setCount(card.count - 1)}
        // disabled={card.count <= 0}
        disabled
      >
        -
      </button>
      <input
        className="count__input"
        type="number"
        min="0"
        value={card.count < 1 ? 0 : card.count}
        //onChange={card.onChange}
        disabled
      />
      <button
        className="count__button"
        onClick={() => card.setCount(card.count + 1)}
        disabled
      >
        +
      </button>
    </div>
  );
};
