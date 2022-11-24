import { useState } from "react";
// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

const getSize = (size) =>
  size.map((item) => ({
    name: item,
    status: false,
  }));

export function useSize(jacket) {
  //const card = useContext(AppContext);
  const windowSize = jacket.size ? getSize(jacket.size) : [];
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
