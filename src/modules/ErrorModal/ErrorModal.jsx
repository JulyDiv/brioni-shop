import React from "react";

export const ErrorModal = ({ description }) => {
  return (
    <>
      <div className="error">
        <div className="error-wrapper">
          <span className="error__span">{description}</span>
        </div>
      </div>
    </>
  );
};