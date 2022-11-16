import React from "react";
import Link from "next/link";

export const MenuCostume = ({ setIsMenuMobile }) => {
  return (
    <div class="menu-costume">
      <div class="menu-costume__block">
        <li class="menu-costume__item">
          <Link
            href="/catalog"
            class="menu-costume__link"
            onClick={() => setIsMenuMobile(false)}
          >
            Costumes
          </Link>
        </li>
        <li class="menu-costume__item">
          <Link
            href="/catalog"
            class="menu-costume__link"
            onClick={() => setIsMenuMobile(false)}
          >
            Jackets
          </Link>
        </li>
        <li class="menu-costume__item">
          <Link href="#" class="menu-costume__link">
            Trousers
          </Link>
        </li>
        <li class="menu-costume__item">
          <Link href="#" class="menu-costume__link">
            Coat
          </Link>
        </li>
        <li class="menu-costume__item">
          <Link href="#" class="menu-costume__link">
            Shirts
          </Link>
        </li>
        <li class="menu-costume__item">
          <Link href="#" class="menu-costume__link">
            Tuxedos
          </Link>
        </li>
      </div>
    </div>
  );
};