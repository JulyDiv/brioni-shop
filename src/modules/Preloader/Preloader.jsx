/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState, useEffect } from "react";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div class="preloader">
          <div class="preloader-wrapper">
            <img class="preloader__img" src="img/preloader-brioni.png" alt="" />
            <span class="preloader__span">Continental Style</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
