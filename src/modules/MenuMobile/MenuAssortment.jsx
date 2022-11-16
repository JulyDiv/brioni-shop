/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import { MenuAssortmentButton } from "../../components/MenuAssortmentButton";
import { MenuCostume } from "./MenuCostume";

export const MenuAssortment = ({ setIsMenuMobile, setIsAssortment }) => {
  const [isAccordion, setIsAccordion] = useState(false);
  const onClick = () => {
    isAccordion ? setIsAccordion(false) : setIsAccordion(true);
  };
  return (
    <div class="menu-assortment">
      <button
        class="menu-button menu-assortment__button"
        onClick={() => setIsAssortment(false)}
      >
        <img
          src="img/arrow-left.svg"
          alt="arrow left"
          class="menu-assortment__button-image"
        />
        Assortment
      </button>

      <div class="menu-assortment__list">
        <div class="menu-assortment__accordion">
          <div class="line"></div>
          <MenuAssortmentButton
            description="Costume collection"
            onClick={onClick}
          />
          {isAccordion && <MenuCostume setIsMenuMobile={setIsMenuMobile} />}
          <div class="line"></div>
          <MenuAssortmentButton description="Leisure wear" />
          <div class="line"></div>
          <MenuAssortmentButton description="Accessories" />
          <div class="line"></div>
          <MenuAssortmentButton description="Shoes" />
          <div class="line"></div>
        </div>
      </div>
    </div>
  );
};
