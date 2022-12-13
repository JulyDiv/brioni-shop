/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";

export const SkeletonCard = ({ jacket }) => {
  return (
    <>
      <section className="card">
        <div className="container">
          <BreadCrumb jacket={jacket} />
          <div className="card-wrapper">
            <div className="card-jackets">
              <div className="sceleton card-choice">
                <div
                  className="skeleton card-choice__image"
                  style={{ height: "90px" }}
                ></div>
                <div
                  className="skeleton card-choice__image"
                  style={{ height: "90px" }}
                ></div>
                <div
                  className="skeleton card-choice__image"
                  style={{ height: "90px" }}
                ></div>
                <div
                  className="skeleton card-choice__image"
                  style={{ height: "90px" }}
                ></div>
                <div
                  className="skeleton card-choice__image"
                  style={{ height: "90px" }}
                ></div>
              </div>
              <div
                className="skeleton skeleton__card-main"
                style={{ width: "575px", height: "650px" }}
              ></div>
            </div>
            <div
              className="skeleton skeleton__card-info"
              style={{ width: "447px", height: "700px" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};
