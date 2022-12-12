import { useState } from "react";

export function useSize() {
  const [size, setSize] = useState();

  function changeSize(e) {
    setSize(e.target.value);
  }

  return {
    size,
    changeSize,
  };
}
