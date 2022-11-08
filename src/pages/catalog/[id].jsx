import React from "react";
import { CardItem } from "../../components/CardItem";
import { Complete } from "../../modules/Complete/Complete";

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

export default function Card ({ jacket }) {
    return (
        <>
        <CardItem jacket={jacket} />
        <Complete />
        </>
    )
}