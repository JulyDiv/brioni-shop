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
  setLabelOrder
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
      />
      {isOrder && (
        <ModalOrder
          isOrder={isOrder}
          setIsOrder={setIsOrder}
          orders={orders}
          setOrders={setOrders}
        />
      )}
      {children}
      <Footer />
    </>
  );
};
