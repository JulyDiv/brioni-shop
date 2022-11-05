import { useState } from "react";

const getChoice = (choice) =>
  choice.map((item) => ({
    name: item,
  }));

export function useChoice(isOpenCard) {
  const windowChoice = isOpenCard.choice ? getChoice(isOpenCard.choice) : [];
  const [choice, setChoice] = useState(windowChoice);
  //   const checkedChoice = (index) => {
  //     setChoice(
  //       choice.map((item, i) => {
  //         if (i === index) {
  //           item.status = !item.status;
  //         }
  //         return item;
  //       })
  //     );
  //   };
  return { choice };
}
