import React from "react";
import Link from "next/link";
import { useState } from "react";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { MenuAssortment } from "./MenuAssortment";

export const MenuMobile = ({ setIsMenuMobile, isMenuMobile }) => {
  const [isAssortment, setIsAssortment] = useState(false);
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
              Assortment
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
            <Link href="#" className="menu-mobile__link-bottom">
              Favorites
            </Link>
            <Link href="#" className="menu-mobile__link-bottom">
              Personal Account
            </Link>
            <Link href="#" className="menu-mobile__link-bottom">
              Store Finder
            </Link>
            <Link href="#" className="menu-mobile__link-bottom">
              Customer servicer
            </Link>
          </div>

          <div className="menu__line"></div>
        </div>
      </>
    );
}