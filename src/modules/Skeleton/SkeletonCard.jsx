/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";

export const SkeletonCard = ({ jacket }) => {
  return (
    <>
      <section className="card">
        <div className="container">
          {/* <BreadCrumb jacket={jacket} /> */}
          <div
            className="skeleton card-wrapper"
          >
            <div className="card-jackets">
              <div
                className="skeleton-box card-choice"
                style={{ height: "620px" }}
              >
              </div>
              <div
                className="skeleton-box skeleton__card-main"
                style={{ width: "575px", height: "650px" }}
              ></div>
            </div>
            <div
              className="skeleton-box skeleton__card-info"
              style={{ width: "450px", height: "700px", marginLeft: "52px" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};
