import React from "react";
import { CharacterMobile } from "../CharacterMobile/CharacterMobile";
import { SwiperCardMobile } from "../SwiperCardMobile/SwiperCardMobile";
import { useChoice } from "../../hooks/useChoice";

export const CardModalMobile = ({ jacket }) => {
  const choice = useChoice(jacket);
  return (
    <>
      <SwiperCardMobile {...choice} />
      <CharacterMobile />
    </>
  );
};
