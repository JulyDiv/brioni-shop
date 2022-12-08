import { createContext, useState } from "react";
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
  isContact,
  setIsContact,
  isThank,
  setIsThank,
  isMenuMobile,
  setIsMenuMobile,
  isSelect, setIsSelect, selects, setSelects
}) => {
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [stateOrder, setStateOrder] = useState({});
  const [stateSelect, setStateSelect] = useState({});

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

  const select = !stateSelect
    ? {
        ...selects,
        count: count.count,
      }
    : {};

  const addSelect = () => {
    const list = new Map(selects);
    if (list.get(jacket.id)) {
      list.set(jacket.id, {
        ...jacket,
        count: count.count,
      });
    } else {
      list.set(jacket.id, select);
    }
    setSelects(list);
    setLabelSelect(true);
  };

  const deleteOrder = (id) => {
    let newOrder = [...orders.values()].filter((item) => item.id != id);
    setOrders(newOrder);
  };

  const deleteSelect = (id) => {
    let newSelect = [...selects.values()].filter((item) => item.id != id);
    setSelects(newSelect);
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

  //let totalCounterSelect;
  const totalCounterSelect = [...selects.values()].reduce(
    (result, select) => select.count + result,
    0
  );

  const contextValue = {
    jacket,
    labelOrder,
    setLabelOrder,
    isOrder,
    setIsOrder,
    orders,
    setOrders,
    order,
    addOrder,
    deleteOrder,
    isOpenCard,
    setIsOpenCard,
    count,
    sizes,
    size,
    checkedSize,
    color,
    colors,
    checkedColor,
    totalCounter,
    totalCounterSelect,
    totalPrice,
    total,
    isContact,
    setIsContact,
    isThank,
    setIsThank,
    isMenuMobile,
    setIsMenuMobile,
    labelSelect,
    setLabelSelect,
    isSelect,
    setIsSelect,
    selects,
    setSelects,
    deleteSelect,
    addSelect,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };