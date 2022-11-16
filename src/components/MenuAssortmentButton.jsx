/* eslint-disable @next/next/no-img-element */
import React from "react";

export const MenuAssortmentButton = ({ description, onClick }) => {
    return (
      <>
        <button class="menu-button menu-assortment__item" onClick={() => onClick()}>
          {description}
          <img
            class="menu-button__image"
            src="/img/arrow-down.svg"
            alt="arrow down"
          />
        </button>
      </>
    );
}