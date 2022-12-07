import { createContext, useState } from "react";
import { useSize } from "../hooks/useSize";
import { useCount } from "../hooks/useCount";

const AppContext = createContext();

const AppWrapper = ({
  children,
  orders,
  isOrder,
  setOrders,
  setIsOrder,
  jacket,
  setIsOpenCard,
  isOpenCard,
  labelOrder,
  setLabelOrder,
  labelSelect,
  setLabelSelect,
  // count,
  // setCount,
  // onChange,
  isContact,
  setIsContact,
  isThank,
  setIsThank,
  isMenuMobile,
  setIsMenuMobile,
}) => {
  //const [dataJacket, setDataJacket] = useState(jacket);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const [stateOrder, setStateOrder] = useState({});
  //const [stateSize, setStateSize] = useState([]);
  //const [stateColor, setStateColor] = useState([]);
  const [isSelectModal, setIsSelectModal] = useState(false);

  // const getSize = (size) =>
  //   size.map((item) => ({
  //     name: item,
  //     status: false,
  //   }));
  //console.log(getSize(size));
  //console.log(jacket.size);
  //const windowSize = jacket.size ? getSize(jacket.size) : [];
  //const [size, setSize] = useState(windowSize);

  //const color = useColor(jacket);

  //const size = useSize(jacket);
  const count = useCount();

  const order = !stateOrder
    ? {
        ...orders,
        count: count.count,
        size: size,
        color: color,
      }
    : {};

  const checkedSize = (id) => {
    const newSize = jacket.size.filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setSize(newSize);
  };

  const sizes = size
    .filter((item) => item.status)
    .map((item) => item.sizeName)
    .join(", ");
    console.log("sizes:", sizes);

  // const sizes = size.size
  //   .filter((item) => item.status)
  //   .map((item) => item.name)
  //   .join(", ");

  const checkedColor = (id) => {
    const newColor = jacket.color.filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setColor(newColor);
  };

  const colors = color
    .filter((item) => item.status)
    .map((item) => item.colorName)
    .join(", ");
  //console.log("colors", colors);

  const addOrder = () => {
    const list = new Map(orders);
    if (list.get(jacket.id)) {
      list.set(jacket.id, {
        ...jacket,
        count: count.count,
        size: size,
        color: color,
      });
    } else {
      list.set(jacket.id, order);
    }
    setOrders(list);
    //setOrders([...orders, order])
    isOpenCard ? setIsOpenCard(false) : setIsOpenCard(true);
    setLabelOrder(true);
  };

  const addSelect = () => {
    isSelectModal ? setIsSelectModal(false) : setIsSelectModal(true);
    setLabelSelect(true);
  };

  const deleteOrder = (id) => {
    let newOrder = [...orders.values()].filter((item) => item.id != id);
    setOrders(newOrder);
  };

  const totalPrice = (order) => order.price * order.count;

  const total = [...orders.values()].reduce(
    (result, order) => totalPrice(order) + result,
    0
  );

  const totalCounter = [...orders.values()].reduce(
    (result, order) => order.count + result,
    0
  );

  const contextValue = {
    jacket,
    isOrder,
    orders,
    order,
    setIsOrder,
    setOrders,
    addOrder,
    isOpenCard,
    isSelectModal,
    setIsSelectModal,
    setIsOpenCard,
    labelOrder,
    setLabelOrder,
    setLabelSelect,
    //setCount,
    count,
    sizes,
    size,
    checkedSize,
    color,
    colors,
    //onChange,
    deleteOrder,
    totalCounter,
    totalPrice,
    total,
    labelSelect,
    setLabelOrder,
    addSelect,
    isContact,
    setIsContact,
    isThank,
    setIsThank,
    isMenuMobile,
    setIsMenuMobile,
    checkedColor,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
