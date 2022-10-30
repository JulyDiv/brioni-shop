import React from "react";
import Link from "next/link";

export const InfoBlock = ({ title, description, link, imgLeft }) => {
  return (
    <section
      className="info"
      style={{ padding: imgLeft === true ? "0px 200px 100px 0px" : "" }}
    >
      <div className="info-wrapper">
        <div
          className="info-block"
          style={{
            width: imgLeft === true ? "30%" : "",
            height: imgLeft === true ? "275px" : "",
          }}
        >
          <h2 className="info-block__title">{title}</h2>
          <p className="info-block__text">{description}</p>
          <Link href="#" className="info-block__link">
            {link}
          </Link>
        </div>
        <div
          className="info__image"
          style={{
            order: imgLeft ? "-1" : "initial",
            backgroundImage: imgLeft
              ? "url(img/order-img.jpg)"
              : "url(img/spring-img.png)",
          }}
        ></div>
      </div>
    </section>
  );
};
