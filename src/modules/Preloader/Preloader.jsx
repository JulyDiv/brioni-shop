/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";

export const Preloader = ({ isLoading, setIsLoading }) => {
  //const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, [setIsLoading]);

  return (
    <>
      {isLoading ? (
        <div className="preloader">
          <div className="preloader-wrapper">
            <img className="preloader__img" src="img/preloader-brioni.png" alt="Image: Brioni" />
            <span className="preloader__span">Continental Style</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
