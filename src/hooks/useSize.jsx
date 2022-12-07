import { useState, useEffect } from "react";

const getSize = (size) =>
  size.map((item) => ({
    name: item,
    status: false,
  }));

export function useSize(jacket) {
  //const [stateSize, setStateSize] = useState(jacket.size);
  const [stateSize, setStateSize] = useState([]);
  //const [size, setSize] = useState(stateSize);
  // useEffect(() => {
  //   const windowSize = jacket.size ? getSize(jacket.size) : [];
  //   if (jacket.size !== null) {
  //     setStateSize(windowSize);
  //   }
  // }, []);
  //console.log(jacket.size);
  const windowSize = jacket.size ? getSize(jacket.size) : [];
  //const windowSize = !stateSize ? getSize(jacket.size) : [];
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
