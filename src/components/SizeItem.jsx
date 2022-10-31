import React from "react";

export const SizeItem = ({ size, checkedSize }) => {
  return (
    <div className="card-info__size">
      <span className="card-info__choose">Choose your size</span>
      <div className="card-info__size-block">
        {size.map((item, i) => (
          <div key={i}>
            <input
              className="card-info__size-input"
              id="sizeInput"
              type="checkbox"
              checked={item.status}
              onChange={() => checkedSize(i)}
            />
            <label htmlFor="sizeInput" className="card-info__size-label">
              {item.name}
            </label>
          </div>
        ))}
      </div>
      <div className="line card-info__line"></div>
    </div>
  );
};
