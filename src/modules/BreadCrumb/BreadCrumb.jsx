import React from "react";
import Link from "next/link";

export const BreadCrumb = () => {
    return (
      <nav class="breadcrumb">
        <ul class="breadcrumb__list">
          <li class="breadcrumb__item">
            <Link
              href="#"
              class="breadcrumb__link"
            >
              Assortment
            </Link>
          </li>
          <li class="breadcrumb__item">
            <Link href="#" class="breadcrumb__link">
              Costume collection
            </Link>
          </li>
          <li class="breadcrumb__item">Jackets</li>
        </ul>
      </nav>
    );
};