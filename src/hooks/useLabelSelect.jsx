import { useState } from "react";

export function useLabelSelect() {
  const [labelSelect, setLabelSelect] = useState(false);
  return { labelSelect, setLabelSelect };
}