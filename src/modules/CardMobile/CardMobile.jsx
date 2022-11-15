import React from "react";
import { CharacterMobileCard } from "../CharacterMobileCard/CharacterMobileCard";
import { SwiperCardMobile } from "../SwiperCardMobile/SwiperCardMobile";
import { useChoice } from "../../hooks/useChoice";

export const CardMobile = ({ jacket }) => {
  const choice = useChoice(jacket);
  return (
    <>
      <SwiperCardMobile {...choice} />
      <CharacterMobileCard jacket={jacket} />
    </>
  );
};
