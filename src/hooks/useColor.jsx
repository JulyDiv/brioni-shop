import { useState } from "react";

export function useColor() {
  const [color, setColor] = useState();

  function changeColor(e) {
    setColor(e.target.value);
  }

  return {
    color,
    changeColor
  };
}
