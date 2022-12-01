import { useState } from "react";

export function useSelects() {
  const [selects, setSelects] = useState([]);
  return { selects, setSelects };
}
