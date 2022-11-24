import { useState } from "react";

export default function useIsOrder() {
    const [isOrder, setIsOrder] = useState(false);
    return { isOrder, setIsOrder };
}