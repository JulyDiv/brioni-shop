import React, { useState, useEffect } from "react";
import { CardItem } from "../../components/CardItem";
import { Complete } from "../../modules/Complete/Complete";
import { SkeletonCard } from "../../modules/Skeleton/SkeletonCard";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!jacket) {
      setIsLoading(true);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 5500);
  }, [jacket]);

  return (
    <>
      <CardItem jacket={jacket} />
      <Complete jacket={jacket} />
      {/* {isLoading ? (
        <SkeletonCard jacket={jacket} />
      ) : (
        <>
          <CardItem jacket={jacket} />
          <Complete jacket={jacket} />
        </>
      )} */}
    </>
  );
}
