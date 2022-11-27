/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ModalOrder } from "../ModalOrder/ModalOrder";
import { ModalContact } from "../ModalContact/ModalContact";
import { ModalThank } from "../ModalThank/ModalThank";
import { ModalSearch } from "../ModalSearch/ModalSearch";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { MenuButton } from "../../components/MenuButton";
import useIsOrder from "../../hooks/useIsOrder";
import { useOrders } from "../../hooks/useOrders";

export const Header = ({ isOrder, orders, setIsOrder, setOrders, labelOrder, labelSelect }) => {
  //const [isOrder, setIsOrder] = useState(false);
  //const isOrder = useIsOrder();
  const [isContact, setIsContact] = useState(false);
  const [isThank, setIsThank] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  //const [labelOrder, setLabelOrder] = useState(false);
  //const order = useOrders();
  const card = useContext(AppContext);
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
              <button className="icon-link icon__select icon__select--mobile_hidden">
                {labelSelect && <div className="icon-link__label">1</div>}
              </button>
              <button className="icon-link icon__user icon__user--mobile_hidden"></button>
              <button
                className="icon-link icon__bag icon__bag--mobile_visible"
                onClick={() => setIsOrder(true)}
              >
                {card.totalCounter === 0 ? (
                  card.setLabelOrder(false)
                ) : (
                  <div className="icon-link__label">{card.totalCounter}</div>
                )}
              </button>
            </div>
            {isSearch && (
              <ModalSearch isSearch={isSearch} setIsSearch={setIsSearch} />
            )}
          </div>
        </div>
      </header>
      {isContact && (
        <ModalContact
          isContact={isContact}
          setIsContact={setIsContact}
          setIsThank={setIsThank}
        />
      )}
      {isThank && <ModalThank isThank={isThank} setIsThank={setIsThank} />}
    </>
  );
};
