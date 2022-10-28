import React from "react";
import Link from "next/link";

export const FooterInfoLink = ({ description }) => {
  return (
    <li className="footer-info__item">
      <Link href="#" className="footer-info__link">{description}</Link>
    </li>
  );
};
