import { useState } from "react";

export function useIsOrder() {
    const [isOrder, setIsOrder] = useState(false);
    return { isOrder, setIsOrder };
}