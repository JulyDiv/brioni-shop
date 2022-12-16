/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { SelectItem } from "../../components/SelectItem";
import { AppContext } from "../../context/AppContext";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

export const ModalSelect = () => {
  const { selects, setIsSelect, isSelect, totalCounterSelect, select } =
    useContext(AppContext);
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
            Your Select (
            {totalCounterSelect === 0 ? "Empty" : totalCounterSelect})
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
        {[...selects.values()].length ? (
          <>
            <div className="select-wrapper">
              {[...selects.values()].map((select, id) => (
                <SelectItem key={id} select={select} />
              ))}
            </div>
            <div className="select-total">
              <button
                className="button-dark select-total__button"
                onClick={() => onClick()}
              >
                Сontinue shopping
              </button>
            </div>
          </>
        ) : (
          <div className="select-block">
            <img
              className="select-block__image"
              src="/img/select-icon.svg"
              alt="select"
            />
            <button
              className="button-dark select-block__button"
              onClick={() => onClick()}
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};
