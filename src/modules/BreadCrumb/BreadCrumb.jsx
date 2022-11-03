import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

export const BreadCrumb = ({ jacket }) => {
  // const router = useRouter();

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

        {jacket && <li className="breadcrumb__item">
          <Link href="#">{jacket.name}</Link>
        </li>}
        {/* {isOpenCard ? <li className="breadcrumb__item">{isOpenCard.name}</li> : ""} */}
      </ul>
    </nav>
  );
};
