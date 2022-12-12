import { useState } from "react";

export function useChoice(jacket) {
  const [choice, setChoice] = useState();
  const [activeChoice, setActiveChoice] = useState(jacket.choice[0]);

  function changeChoice(e) {
    setChoice(e.target.value);
  }

  return {
    choice,
    setActiveChoice,
    activeChoice,
    setChoice,
    changeChoice,
  };
}
