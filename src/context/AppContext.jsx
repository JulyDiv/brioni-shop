import { createContext, useState } from "react";

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
  labelOrder, setLabelOrder
}) => {
  const [dataJacket, setDataJacket] = useState(jacket);
  const [stateOrder, setStateOrder] = useState({});
  //const [labelOrder, setLabelOrder] = useState(false);

  const order = !stateOrder ? {
    ...orders,
    name: dataJacket.name,
    id: dataJacket.id,
    price: dataJacket.price,
    img: dataJacket.img,
  } : {};

  const addOrder = () => {
    const list = new Map(orders);
    if (list.get(jacket.id)) {
      list.set(jacket.id, {
        ...jacket,
      });
    } else {
      list.set(jacket.id, order);
    }
    setOrders(list);
    isOpenCard ? setIsOpenCard(false) : setIsOpenCard(true);
    setLabelOrder(true);
  };

  const contextValue = {
    isOrder,
    orders,
    setIsOrder,
    setOrders,
    addOrder,
    dataJacket,
    setDataJacket,
    isOpenCard,
    setIsOpenCard,
    setLabelOrder
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
