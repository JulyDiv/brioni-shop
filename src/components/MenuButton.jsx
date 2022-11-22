import React from "react";
import { useState } from "react";

export const MenuButton = ({ setIsMenuMobile, isMenuMobile }) => {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const onEnter = () => {
    setIsHover((current) => !current);
  };
  const onLeave = () => {
    setIsHover((current) => !current);
  };
  const onClick = () => {
    setIsActive((current) => !current);
    isMenuMobile ? setIsMenuMobile(false) : setIsMenuMobile(true);
  };

  return (
    <>
      <button
        className="navbar-button navbar-button--active"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        <div
          className={
            isActive
              ? "navbar-button__line--active"
              : "navbar-button__line" && isHover
              ? "navbar-button__line--hover"
              : "navbar-button__line"
          }
        ></div>
        <div
          className={
            isActive
              ? "navbar-button__line--active"
              : "navbar-button__line" && isHover
              ? "navbar-button__line--hover"
              : "navbar-button__line"
          }
        ></div>
        <div
          className={
            isActive
              ? "navbar-button__line--active"
              : "navbar-button__line" && isHover
              ? "navbar-button__line--hover"
              : "navbar-button__line"
          }
        ></div>
      </button>
    </>
  );
};
