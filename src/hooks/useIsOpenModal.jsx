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