import React, { useState, useRef, useMemo, useEffect } from "react";
import Link from "next/link";

export const InfoBlock = ({ title, description, link, imgLeft }) => {
  const targetRef = useRef(null);
  const [isInfo, setIsInfo] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsInfo(entry.isIntersecting);
    const info = document.querySelector(".info");
    if (entry.isIntersecting) {
      info.classList.add("info-animation");
    }
    // if (entry.isIntersecting) {
    //   info.classList.add("info-animation");
    // } else {
    //   info.classList.remove("info-animation");
    // }
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <>
    <section
      className="info"
      ref={targetRef}
      style={{ padding: imgLeft === true ? "0px 200px 100px 0px" : "", opacity: imgLeft === true ? "1" : "" }}
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
          <Link href="#">
            <span className="info-block__link">{link}</span>
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
    </>
  );
};
