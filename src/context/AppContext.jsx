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
  labelOrder,
  setLabelOrder,
  labelSelect,
  setLabelSelect,
  count,
  setCount,
  onChange,
  isSelectModal,
  setIsSelectModal,
  isContact,
  setIsContact,
  isThank,
  setIsThank,
  isMenuMobile,
  setIsMenuMobile,
}) => {
  const [dataJacket, setDataJacket] = useState(jacket);
  const [stateOrder, setStateOrder] = useState({});

  const order = !stateOrder
    ? {
        ...orders,
        name: dataJacket.name,
        id: dataJacket.id,
        price: dataJacket.price,
        img: dataJacket.img,
        count: count,
      }
    : {};

  const addOrder = () => {
    const list = new Map(orders);
    if (list.get(jacket.id)) {
      list.set(jacket.id, {
        ...jacket,
        count: count,
      });
    } else {
      list.set(jacket.id, order);
    }
    setOrders(list);
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
    dataJacket,
    setDataJacket,
    isOpenCard,
    isSelectModal,
    setIsSelectModal,
    setIsOpenCard,
    labelOrder,
    setLabelOrder,
    setLabelSelect,
    setCount,
    count,
    onChange,
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
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
