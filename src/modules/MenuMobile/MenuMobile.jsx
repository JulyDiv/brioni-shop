import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { MenuAssortment } from "./MenuAssortment";

export const MenuMobile = ({ setIsMenuMobile, isMenuMobile }) => {
  const [isAssortment, setIsAssortment] = useState(false);
  const { setIsSelect, isSelect } = useContext(AppContext);
  const onClick = () => {
    setIsSelect(true);
  };
  return (
    <>
      <ModalOverlay
        setIsMenuMobile={setIsMenuMobile}
        isMenuMobile={isMenuMobile}
      />
      <div className="menu menu-mobile">
        <div className="menu-mobile__block-top">
          <button
            href="#"
            onClick={() => setIsAssortment(true)}
            className="menu-mobile__button"
          >
            ASSORTMENT
          </button>
          {isAssortment && (
            <MenuAssortment
              setIsMenuMobile={setIsMenuMobile}
              setIsAssortment={setIsAssortment}
            />
          )}
          <button href="#" className="menu-mobile__button">
            Bespoke
          </button>
          <button href="#" className="menu-mobile__button">
            Explore
          </button>
        </div>

        <div className="line"></div>

        <div className="menu-mobile__block-bottom">
          <button
            href="#"
            className="menu-mobile__button-bottom"
            onClick={() => onClick()}
          >
            Favorites
          </button>
          <button href="#" className="menu-mobile__button-bottom">
            Personal Account
          </button>
          <button href="#" className="menu-mobile__button-bottom">
            Store Finder
          </button>
          <button href="#" className="menu-mobile__button-bottom">
            Customer servicer
          </button>
        </div>

        <div className="menu__line"></div>
      </div>
    </>
  );
};
