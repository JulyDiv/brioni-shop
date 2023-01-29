/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useRouter } from "next/router";


export const ModalSearch = ({ setIsSearch }) => {

  const { setSearch } = useContext(AppContext);

  const router = useRouter();

  return (
    <div className="search search--mobile">
      <div className="search-wrapper">
        <form action="#" className="search-form">
          <button
            onClick={() => router.push("/catalog")}
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
