import {
  createContext,
  useState,
} from "react";

const AppContext = createContext();

const AppWrapper = ({
  children,
  orders,
  isOrder,
  setOrders,
  setIsOrder,
  jacket,
}) => {
  const [dataJacket, setDataJacket] = useState(jacket);

  const order = {
    ...orders,
    name: jacket.name,
    id: jacket.id,
    price: jacket.price,
    img: jacket.img,
  };

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
    //setIsOpenCard(true);
  };

  const contextValue = {
    isOrder,
    orders,
    setIsOrder,
    setOrders,
    addOrder,
    dataJacket,
    setDataJacket,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };