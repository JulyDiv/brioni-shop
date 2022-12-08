import React, { useContext } from "react";
import { Header } from "../modules/Header/Header";
import { Footer } from "../modules/Footer/Footer";
import { ModalOrder } from "../modules/ModalOrder/ModalOrder";
import { ModalSelect } from "../modules/ModalSelect/ModalSelect";
import { AppContext } from "../context/AppContext";

export const Layout = ({ children }) => {
  const { isOrder, isSelect } = useContext(AppContext);
  return (
    <>
      <Header />
      {isOrder && <ModalOrder />}
      {isSelect && <ModalSelect />}
      {children}
      <Footer />
    </>
  );
};
