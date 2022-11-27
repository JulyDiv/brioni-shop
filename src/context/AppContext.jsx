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
}) => {
  const [dataJacket, setDataJacket] = useState(jacket);
  const [stateOrder, setStateOrder] = useState({});
  //const [labelOrder, setLabelOrder] = useState(false);

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

  const deleteOrder = (id) => {
    let newOrder = [...orders.values()].filter((item) => item.id != id);
    setOrders(newOrder);
  };

  // const total = [...orders.values()].reduce(
  //   (result, order) => totalPrice(order) + result,
  //   0
  // );
  //console.log(total);

  // const totalPrice = [...orders.values()].map(
  //   (order) => (order.price * order.count)
  // );
  // const totalPrice = [...orders.values()].reduce(
  //   (result, order) => order.price * order.count, 0
  // );


  const totalPrice = (order) => order.price * order.count;

  const total = [...orders.values()].reduce((result, order) => totalPrice(order) + result, 0);


  // const totalPrice = [...orders.values()].map((order, id) => {
  //   let sum = 0;
  //   if (order.id === order.id) {
  //     sum = order.price * order.count;
  //   }
  //   return sum;
  // }, 0
  // );
  //console.log(totalPrice);

  const totalCounter = [...orders.values()].reduce(
    (result, order) => order.count + result,
    0
  );

  // const totalSum = [...orders.values()].reduce(
  //   (result) => totalPrice + result,
  //   0
  // );

  // const totalSum = [...orders.values()].reduce(
  //   (result) => +totalPrice.slice(0, 1) + result,
  //   0
  // );

  const contextValue = {
    isOrder,
    orders,
    order,
    setIsOrder,
    setOrders,
    addOrder,
    dataJacket,
    setDataJacket,
    isOpenCard,
    setIsOpenCard,
    labelOrder,
    setLabelOrder,
    setLabelSelect,
    setCount,
    count,
    onChange,
    deleteOrder,
    //totalSum,
    totalCounter,
    totalPrice,
    total
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
