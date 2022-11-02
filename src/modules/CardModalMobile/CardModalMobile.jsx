import React from "react";
import { CharacterMobile } from "../CharacterMobile/CharacterMobile";
import { SwiperCardMobile } from "../SwiperCardMobile/SwiperCardMobile";
import { useChoice } from "../../hooks/useChoice";

export const CardModalMobile = ({ isOpenCard }) => {
  const choice = useChoice(isOpenCard);
  return (
    <>
      <SwiperCardMobile isOpenCard={isOpenCard} {...choice} />
      <CharacterMobile />
    </>
  );
};
