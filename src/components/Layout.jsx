import React from "react";
import { Header } from "../modules/Header/Header";
import { Footer } from "../modules/Footer/Footer";
import { ModalOrder } from "../modules/ModalOrder/ModalOrder";
// import useIsOrder from "../hooks/useIsOrder";
// import { useOrders } from "../hooks/useOrders";

export const Layout = ({
  children,
  orders,
  setOrders,
  isOrder,
  setIsOrder,
  labelOrder,
  setLabelOrder,
  labelSelect,
  count
}) => {
  return (
    <>
      <Header
        orders={orders}
        setOrders={setOrders}
        isOrder={isOrder}
        setIsOrder={setIsOrder}
        labelOrder={labelOrder}
        setLabelOrder={setLabelOrder}
        labelSelect={labelSelect}
        // counter={counter}
        // setCounter={setCounter}
      />
      {isOrder && (
        <ModalOrder
          isOrder={isOrder}
          setIsOrder={setIsOrder}
          orders={orders}
          setOrders={setOrders}
          count={count}
        />
      )}
      {children}
      <Footer />
    </>
  );
};
