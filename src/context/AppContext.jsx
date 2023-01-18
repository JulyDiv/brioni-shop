import { createContext, useState, useEffect } from "react";
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
  isSelect,
  setIsSelect,
  selects,
  setSelects,
  color,
  changeColor,
  size,
  changeSize,
  isErrorModalColor,
  setIsErrorModalColor,
  isErrorModalSize,
  setIsErrorModalSize,
}) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const count = useCount();

  useEffect(() => {
    const orders = localStorage.orders ? JSON.parse(localStorage.orders) : [];
    if (orders !== null) {
      setOrders(orders);
    }
  }, [setOrders]);
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.orders = JSON.stringify(orders);
    });
    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.orders = JSON.stringify(orders);
      });
    };
  }, [orders]);

  useEffect(() => {
    const selects = localStorage.selects
      ? JSON.parse(localStorage.selects)
      : [];
    if (selects !== null) {
      setSelects(selects);
    }
  }, [setSelects]);
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.selects = JSON.stringify(selects);
    });
    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.selects = JSON.stringify(selects);
      });
    };
  }, [selects]);

  useEffect(() => {
    window.sessionStorage.getItem("isLoading");
  }, [])

  useEffect(() => {
    window.sessionStorage.setItem("isLoading", "false")
  }, [])

  const order = {
    ...jacket,
    count: count.count,
    size: size,
    color: color,
  };

  const addOrder = () => {
    color ? setIsErrorModalColor(false) : setIsErrorModalColor(true);
    size ? setIsErrorModalSize(false) : setIsErrorModalSize(true);
    if (!color) {
      setIsErrorModalColor(true);
    } else if (!size) {
      setIsErrorModalSize(true);
    } else {
      setOrders([...orders, order]);
    }
  };

  const select = {
    ...jacket,
    count: count.count,
  };

  const addSelect = (id) => {
    let newSelect = false;
    selects.forEach((el) => {
      if (el.id === id) {
        newSelect = true;
      }
    });
    if (!newSelect) {
      setSelects([...selects, select]);
    }
  };

  const deleteOrder = (index) => {
    let newOrder = orders.filter((item, i) => index !== i);
    setOrders(newOrder);
  };

  const deleteSelect = (id) => {
    let newSelect = selects.filter((item) => item.id != id);
    setSelects(newSelect);
  };

  const totalPrice = (order) => order.price * order.count;

  const total = orders.reduce((result, order) => totalPrice(order) + result, 0);

  const totalCounter = orders.reduce(
    (result, order) => order.count + result,
    0
  );

  const totalCounterSelect = selects.reduce(
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
    size,
    changeSize,
    color,
    changeColor,
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
    isOpenSelect,
    setIsOpenSelect,
    activeColor,
    setActiveColor,
    activeSize,
    setActiveSize,
    isErrorModalColor,
    isErrorModalSize,
    isLoading,
    setIsLoading
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
