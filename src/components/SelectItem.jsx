/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../context/AppContext";

export const SelectItem = ({ select }) => {
  const { deleteSelect, setIsSelect } = useContext(AppContext);

  const router = useRouter();

  const onClick = () => {
    router.push(`/catalog/${select.id}`);
    setIsSelect(false);
  };

  return (
    <>
      <div className="select-jacket">
        <img
          src={select.img}
          alt="Photo: Jacket"
          className="select-jacket__image"
          onClick={() => onClick()}
        />
        <div className="select-jacket__info">
          <span className="select-jacket__text">{select.name}</span>
          <button
            className="select-jacket__icon"
            onClick={() => deleteSelect(select.id)}
          ></button>
        </div>
        <span className="select-jacket__price">€ {select.price}</span>
      </div>
    </>
  );
};
