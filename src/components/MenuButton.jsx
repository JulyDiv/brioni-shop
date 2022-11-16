import React from "react";
import { useState } from "react";

export const MenuButton = ({ setIsMenuMobile, isMenuMobile }) => {
  const [isHover, setIsHover] = useState(false);
  const onEnter = () => {
    setIsHover((current) => !current);
  };
  const onLeave = () => {
    setIsHover((current) => !current);
  };
  // const closeButton = (e) => {
  //   e.currentTarget.classList.toggle("navbar-button__line--active");
  // }
  return (
    <>
      <button
        className="navbar-button navbar-button--active"
        onClick={() => {isMenuMobile ? setIsMenuMobile(false) : setIsMenuMobile(true);}}
        // onClick={closeButton}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className={
            isHover ? "navbar-button__line--hover" : "navbar-button__line"
          }
        ></div>
        <div
          className={
            isHover ? "navbar-button__line--hover" : "navbar-button__line"
          }
        ></div>
        <div
          className={
            isHover ? "navbar-button__line--hover" : "navbar-button__line"
          }
        ></div>
      </button>
      {/* <button className="menu-close"></button> */}
    </>
  );
};
