/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export const ModalSearch = () => {
  return (
    <div className="search">
      <div className="search-wrapper">
        <Link href="#">
          <a className="search-icon__link">
            <img
              src="img/search.svg"
              alt="Icon: search"
              className="search-icon__image search-icon__image--mobile_visible"
            />
          </a>
        </Link>
        <form action="#" className="search-form">
          <input
            type="text"
            className="input search-input"
            placeholder="Search"
          />
          <button className="search-button">
            <img
              src="img/close-search.svg"
              alt="close"
              className="search-button__image"
            />
          </button>
        </form>
      </div>
    </div>
  );
};
