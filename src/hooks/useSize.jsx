import { useState } from "react";

const getSize = (size) =>
  size.map((item) => ({
    name: item,
    status: false,
  }));

export function useSize(isOpenCard) {
  const windowSize = isOpenCard.size ? getSize(isOpenCard.size) : [];
  const [size, setSize] = useState(windowSize);
  const checkedSize = (index) => {
    setSize(
      size.map((item, i) => {
        if (i === index) {
          item.status = !item.status;
        }
        return item;
      })
    );
  };
  return { size, checkedSize };
}
