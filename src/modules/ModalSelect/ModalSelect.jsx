/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { SelectItem } from "../../components/SelectItem";
import { AppContext } from "../../context/AppContext";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

export const ModalSelect = () => {
  const { selects, setIsSelect, isSelect, totalCounterSelect, select } = useContext(AppContext);
  //console.log(selects);

  const router = useRouter();

  const closeModal = () => {
    setIsSelect(false);
  };

  const onClick = () => {
    router.push("/catalog");
    setIsSelect(false);
  };

//console.log("selects", selects);
  return (
    <>
      <ModalOverlay setIsSelect={setIsSelect} isSelect={isSelect} />
      <div className="select">
        <div className="select-title">
          <h3 className="select-title__title">
              Your Select ({totalCounterSelect === 0 ? "Empty" : totalCounterSelect})
            </h3>
          <button
            onClick={() => closeModal()}
            className="close-button select-title__button"
          >
            <img
              src="/img/close-search.svg"
              alt="close"
              className="select-title__image"
            />
          </button>
        </div>
        <div className="select-wrapper">
          {[...selects.values()].length ? (
            <div className="select-block">
              {[...selects.values()].map((select, id) => (
                <SelectItem key={id} select={select} />
              ))}
            </div>
          ) : (
            <>
              <div className="line select-block__line"></div>
              <img
                src="/img/select-icon.svg"
                alt="select"
                style={{
                  width: "75%",
                  display: "flex",
                  margin: "0 auto 50px auto",
                }}
              />
              <button
                className="button-dark"
                style={{
                  width: "75%",
                  height: "50px",
                  margin: "auto",
                }}
                onClick={() => onClick()}
              >
                Start Shopping
              </button>
            </>
          )}
        </div>
        <div className="select-total">
          {/* <span className="select-total__span">
              Total : € {total.toLocaleString()}
            </span> */}
          <button
            onClick={() => closeModal()}
            className="button-dark select-total__button"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
};
