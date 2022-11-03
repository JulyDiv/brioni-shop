/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
// import { useState } from "react";

export const Header = () => {
  //   const [bag, setBag] = useState(false);
  //   const [contact, setContact] = useState(false);
  //   const [thank, setThank] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="navbar">
            <button className="navbar-button">
              <span className="navbar-button__line"></span>
              <span className="navbar-button__line"></span>
              <span className="navbar-button__line"></span>
            </button>
            {/* <button className="menu-close"></button> */}

            <div className="navbar-block">
              <Link href="/catalog" className="neon navbar-block__link">
                Assortment
              </Link>
              <Link href="#" className="navbar-block__link">
                Bespoke
              </Link>
              <Link href="#" className="navbar-block__link">
                Explore
              </Link>
            </div>

            <img src="/img/navbar-logo.svg" alt="Logo: Brioni" className="navbar-logo" />

            <div className="icon">
              <button className="icon-link icon__search icon__search--mobile_visible"></button>
              <button className="icon-link icon__select icon__select--mobile_hidden"></button>
              <button className="icon-link icon__user icon__user--mobile_hidden"></button>
              <button className="icon-link icon__bag icon__bag--mobile_visible"></button>
              {/* <div className="icon-lable icon-bag icon-bag--active"></div> */}
            </div>
          </div>
        </div>
      </header>
      {/* {bag && <Bag setBag={setBag} setContact={setContact} />}
      {contact && <Contact setContact={setContact} setThank={setThank} />}
      {thank && <Thank setThank={setThank} />} */}
    </>
  );
};
