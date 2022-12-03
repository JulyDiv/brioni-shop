/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ModalSearch = ({ isSearch, setIsSearch }) => {
  return (
    <div className="search search--mobile">
      <div className="search-wrapper">
        
        <form action="#" className="search-form">
          <button
          type="submit"
          className="search__button search__button--mobile_visible"
        ></button>
          <input
            type="text"
            className="search-form__input"
            placeholder="Search"
          />
          <button
            className="search-form__button"
            onClick={() => setIsSearch(false)}
          >
            <img src="/img/close-search.svg" alt="close" />
          </button>
        </form>
      </div>
    </div>
  );
};
