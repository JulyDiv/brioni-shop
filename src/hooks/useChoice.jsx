import { useState } from "react";

const getChoice = (choice) =>
  choice.map((item) => ({
    name: item,
    status: false,
  }));

export function useChoice(jacket) {
  const windowChoice = jacket.choice ? getChoice(jacket.choice) : [];
  const [choice, setChoice] = useState(windowChoice);
  const [activeChoice, setActiveChoice] = useState(jacket.img);
    const checkedChoice = (index) => {
      setChoice(
        choice.map((item, i) => {
          if (i === index) {
            item.status = !item.status;
          }
          return item;
        }),
      );
    };
  return { choice, checkedChoice, setActiveChoice, activeChoice };
}
