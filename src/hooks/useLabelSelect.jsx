import { useState } from "react";

export default function useLabelSelect() {
  const [labelSelect, setLabelSelect] = useState(false);
  return { labelSelect, setLabelSelect };
}