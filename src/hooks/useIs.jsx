import { useState } from "react";

export function useIsOrder() {
  const [isOrder, setIsOrder] = useState(false);
  return { isOrder, setIsOrder };
}

export function useIsOpenCard() {
  const [isOpenCard, setIsOpenCard] = useState(false);
  return { isOpenCard, setIsOpenCard };
}

export function useIsContact() {
  const [isContact, setIsContact] = useState(false);
  return { isContact, setIsContact };
}

export function useIsThank() {
  const [isThank, setIsThank] = useState(false);
  return { isThank, setIsThank };
}

export function useIsMenuMobile() {
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  return { isMenuMobile, setIsMenuMobile };
}

export function useIsActiveSelect() {
  const [isActiveSelect, setIsActiveSelect] = useState(false);
  return { isActiveSelect, setIsActiveSelect };
}

export function useIsSelect() {
  const [isSelect, setIsSelect] = useState(false);
  return { isSelect, setIsSelect };
}

export function useIsErrorModalColor() {
  const [isErrorModalColor, setIsErrorModalColor] = useState(false);
  return { isErrorModalColor, setIsErrorModalColor };
}

export function useIsErrorModalSize() {
  const [isErrorModalSize, setIsErrorModalSize] = useState(false);
  return { isErrorModalSize, setIsErrorModalSize };
}