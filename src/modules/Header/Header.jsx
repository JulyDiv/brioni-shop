/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { ModalOrder } from "../ModalOrder/ModalOrder";
import { ModalContact } from "../ModalContact/ModalContact";
import { ModalThank } from "../ModalThank/ModalThank";
import { ModalSearch } from "../ModalSearch/ModalSearch";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { MenuButton } from "../../components/MenuButton";
import useIsOrder from "../../hooks/useIsOrder";
import { useOrders } from "../../hooks/useOrders";

export const Header = ({ isOrder, orders, setIsOrder, setOrders }) => {
  //const [isOrder, setIsOrder] = useState(false);
  //const isOrder = useIsOrder();
  const [isContact, setIsContact] = useState(false);
  const [isThank, setIsThank] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  //const order = useOrders();
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
              <button className="icon-link icon__select icon__select--mobile_hidden"></button>
              <button className="icon-link icon__user icon__user--mobile_hidden"></button>
              <button
                className="icon-link icon__bag icon__bag--mobile_visible"
                onClick={() => setIsOrder(true)}
              ></button>
              {/* <div className="icon-lable icon-bag icon-bag--active"></div> */}
            </div>
            {isSearch && (
              <ModalSearch isSearch={isSearch} setIsSearch={setIsSearch} />
            )}
          </div>
        </div>
      </header>
      {/* {isOrder && <ModalOrder isOrder={isOrder} setIsOrder={setIsOrder} orders={orders} setOrders={setOrders} />} */}
      {/* {isOrder.isOrder && (
        <ModalOrder
          {...isOrder}
          {...order}
        />
      )} */}
      {/* {isOrder.isOrder && (
        <ModalOrder
          {...isOrder}
          setIsContact={setIsContact}
        />
      )} */}
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
