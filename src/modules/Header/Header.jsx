/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
//import { useRouter } from "next/router";
import { AppContext } from "../../context/AppContext";
import { ModalContact } from "../ModalContact/ModalContact";
import { ModalThank } from "../ModalThank/ModalThank";
import { ModalSearch } from "../ModalSearch/ModalSearch";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { MenuButton } from "../../components/MenuButton";
//import { ModalSelect } from "../ModalSelect/ModalSelect";

export const Header = ({}) => {
  const [isSearch, setIsSearch] = useState(false);
  //const router = useRouter();
  const {
    totalCounter,
    setLabelOrder,
    setIsOrder,
    isMenuMobile,
    setIsMenuMobile,
    isContact,
    setIsContact,
    isThank,
    setIsThank,
    isSelect,
    setIsSelect,
    setLabelSelect,
    totalCounterSelect,
    isOrder,
  } = useContext(AppContext);

  const onClick = () => {
    setIsSelect(true);
  }

  useEffect(() => {
    const body = document.querySelector("body");
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    body.style.marginRight =
      isOrder || isContact || isSelect || isMenuMobile ? scrollBarWidth : "0";
    body.style.overflow =
      isOrder || isContact || isSelect || isThank || isMenuMobile
        ? "hidden"
        : "auto";
  }, [isOrder, isContact, isSelect, isThank, isMenuMobile]);

  return (
    <>
      <header className="header">
        {isMenuMobile && (
          <MenuMobile
            setIsMenuMobile={setIsMenuMobile}
            isMenuMobile={isMenuMobile}
          />
        )}
        <div className="container">
          <div className="navbar">
            <MenuButton
              setIsMenuMobile={setIsMenuMobile}
              isMenuMobile={isMenuMobile}
            />
            <div className="navbar-block">
              <Link href="/catalog" className="navbar-block__link">
                Assortment
              </Link>
              <Link href="#" className="navbar-block__link">
                Bespoke
              </Link>
              <Link href="#" className="navbar-block__link">
                Explore
              </Link>
            </div>

            <img
              src="/img/navbar-logo.svg"
              alt="Logo: Brioni"
              className="navbar-logo"
            />

            <div className="icon">
              <button
                className="icon-link icon__search icon__search--mobile_visible"
                onClick={() => setIsSearch(true)}
              ></button>

              <button
                className="icon-link icon__select icon__select--mobile_hidden"
                onClick={() => onClick()}
              >
                {totalCounterSelect === 0 ? (
                  setLabelSelect(false)
                ) : (
                  <div className="icon-link__label">{totalCounterSelect}</div>
                )}
              </button>

              <button className="icon-link icon__user icon__user--mobile_hidden"></button>

              <button
                className="icon-link icon__bag icon__bag--mobile_visible"
                onClick={() => setIsOrder(true)}
              >
                {totalCounter === 0 ? (
                  setLabelOrder(false)
                ) : (
                  <div className="icon-link__label">{totalCounter}</div>
                )}
              </button>
            </div>
            {isSearch && (
              <ModalSearch isSearch={isSearch} setIsSearch={setIsSearch} />
            )}
          </div>
        </div>
      </header>
      <ModalContact
        isContact={isContact}
        setIsContact={setIsContact}
        setIsThank={setIsThank}
      />
      {/* {isContact && (
        <ModalContact
          isContact={isContact}
          setIsContact={setIsContact}
          setIsThank={setIsThank}
        />
      )} */}
      {isThank && <ModalThank isThank={isThank} setIsThank={setIsThank} />}
    </>
  );
};
