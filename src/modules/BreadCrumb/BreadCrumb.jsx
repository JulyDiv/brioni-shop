import React from "react";
import Link from "next/link";

export const BreadCrumb = ({ isOpenCard, setIsOpenCard }) => {
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link href="/" className="breadcrumb__link">
            Home
          </Link>
        </li>
        <li className="breadcrumb__item" onClick={() => setIsOpenCard(false)}>
            Costume collection
        </li>
        <li className="breadcrumb__item" onClick={() => setIsOpenCard(false)}>
          Jackets
        </li>
        {isOpenCard ? <li className="breadcrumb__item">{isOpenCard.name}</li> : ""}
      </ul>
    </nav>
  );
};