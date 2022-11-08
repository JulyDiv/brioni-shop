import React from "react";
import Link from "next/link";

export const BreadCrumb = ({ jacket }) => {

  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link href="/" className="breadcrumb__link">
            Home
          </Link>
        </li>
        <li className="breadcrumb__item">
          <Link href="/catalog">Costume collection</Link>
        </li>

        <li className="breadcrumb__item">
          <Link href="/catalog">Jackets</Link>
        </li>

        <li className="breadcrumb__item">
          <Link href="#">{jacket.name}</Link>
        </li>
      </ul>
    </nav>
  );
};
