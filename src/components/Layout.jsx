import React from "react";
import { Header } from "../modules/Header/Header";
import { Footer } from "../modules/Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
