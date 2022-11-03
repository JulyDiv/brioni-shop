/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import { useEffect } from "react";

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/dbCatalog");
//   const data = await res.json();
//   return {
//     props: { jacket: data }
//   }
// }

export const CatalogItem = (props) => {
  console.log('props >>>', props);
  // const router = useRouter();
  // const { id } = router.query;
  // const card = router.query.id;

  // const openCard = (item) => {
  //   setIsOpenCard(true);
  //   setIsOpenCard(item);
  //   router.push("/card");
  // };
  return (
    <>
      <div className="catalog-assortment__jacket">
        <img
          // src={item.img}
          alt="Photo: Jacket"
          className="catalog-assortment__image"
        />
        <div className="catalog-assortment__info">
          <span className="catalog-assortment__text"></span>
          <button className="catalog-assortment__button"></button>
        </div>
        <span className="catalog-assortment__price"></span>
      </div>
      {/* <Link href={`/catalog/${item.id}`}> */}
      {/* <div 
       id={item.id} 
      className="catalog-assortment__jacket">
        
          <img
          src={item.img}
          alt="Photo: Jacket"
          className="catalog-assortment__image"
           onClick={() => openCard(item)}
        />
        <div className="catalog-assortment__info">
          <span className="catalog-assortment__text"></span>
          <button className="catalog-assortment__button"></button>
        </div>
        <span className="catalog-assortment__price"></span>
        
      </div> */}
      {/* </Link> */}
    </>
  );
};
