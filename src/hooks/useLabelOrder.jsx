import { useState } from "react";

export function useLabelOrder() {
    const [labelOrder, setLabelOrder] = useState(false);
    return { labelOrder, setLabelOrder };
}
