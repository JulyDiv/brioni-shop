/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";


export const ModalSearch = ({ setIsSearch }) => {

  const { setSearch } = useContext(AppContext);
  //console.log(search);

  return (
    <div className="search search--mobile">
      <div className="search-wrapper">
        <form action="#" className="search-form">
          <button
            type="submit"
            className="search-form__button search-form__button-search"
          ></button>
          <input
            type="text"
            className="search-form__input"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="search-form__button search-form__button-close"
            onClick={() => setIsSearch(false)}
          >
          </button>
        </form>
      </div>
    </div>
  );
};
