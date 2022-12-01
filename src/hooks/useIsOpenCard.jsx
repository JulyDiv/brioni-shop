import { useState } from "react";

export function useIsOpenCard() {
  const [isOpenCard, setIsOpenCard] = useState(false);
  return { isOpenCard, setIsOpenCard };
}
