import { useState } from "react";

export default function useIsOpenCard() {
    const [isOpenCard, setIsOpenCard] = useState(false);
    return { isOpenCard, setIsOpenCard };
}