import { useState } from "react";

export default function useLabelOrder() {
    const [labelOrder, setLabelOrder] = useState(false);
    return { labelOrder, setLabelOrder };
}
