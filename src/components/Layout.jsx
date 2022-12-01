import React, { useContext } from "react";
import { Header } from "../modules/Header/Header";
import { Footer } from "../modules/Footer/Footer";
import { ModalOrder } from "../modules/ModalOrder/ModalOrder";
import { AppContext } from "../context/AppContext";

export const Layout = ({ children }) => {
  const { isOrder } = useContext(AppContext);
  return (
    <>
      <Header />
      {isOrder && <ModalOrder />}
      {children}
      <Footer />
    </>
  );
};
