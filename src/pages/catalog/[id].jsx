import React from "react";
import { CardItem } from "../../components/CardItem";
import { Complete } from "../../modules/Complete/Complete";
import { useOrders } from "../../hooks/useOrders";
import useIsOrder from "../../hooks/useIsOrder";
import useIsOpenCard from "../../hooks/useIsOpenCard";
import { Header } from "../../modules/Header/Header";

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://encouraging-exuberant-park.glitch.me/catalog/${id}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { jacket: data },
  };
};

export default function Card({ jacket }) {
  const order = useOrders();
  const isOrder = useIsOrder();
  const isOpenCard = useIsOpenCard();
  return (
    <>
      {/* <Header {...order} {...isOrder} /> */}
      <CardItem jacket={jacket} {...order} {...isOrder} {...isOpenCard} />
      <Complete />
    </>
  );
}
