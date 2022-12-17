import React, { useState, useRef, useMemo, useEffect } from "react";

export const Ambassador = () => {
  const targetRef = useRef(null);
  const [isAmbassador, setIsAmbassador] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsAmbassador(entry.isIntersecting);
    const ambassador = document.querySelector(".ambassador");
    if (entry.isIntersecting) {
      ambassador.classList.add("ambassador-animation");
    }
    // if (entry.isIntersecting) {
    //   ambassador.classList.add("ambassador-animation");
    // } else {
    //   ambassador.classList.remove("ambassador-animation");
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
    <section className="ambassador" ref={targetRef}>
      <div className="ambassador-wrapper">
        <div className="ambassador-info">
          <div className="ambassador-info__block">
            <p className="ambassador-info__text">
              “I have always admired the elegant and timeless design of Brioni,
              the brand embodies uniqueness, quality and excellence.”
            </p>
            <span className="ambassador-info__link">
              House ambassador — Brad Pitt.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
