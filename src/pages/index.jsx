import Head from 'next/head'
import { Preloader } from "../modules/Preloader/Preloader";
import { Home } from "../modules/Home/Home";
import { InfoBlock } from '../modules/InfoBlock/InfoBlock';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Brioni Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Preloader /> */}
      <Home />
      <InfoBlock
        title="Spring collection 2022"
        description="Meeting modern trends, the Brioni spring-summer 2022 collection offers a reinterpretation of the laid-back Roman
          style, embodied in a versatile wardrobe. The new silhouettes, evoking a carefree attitude to life, are imbued with respect for the
          sartorial skill and unsurpassed quality of tailoring, on which the heritage of the House is built."
        link="View collection"
      />
      <InfoBlock
        imgLeft={true}
        title="Made to Order"
        description="Brioni House offers you to discover a new service for making personalized products to order. The service combines our impeccable
            craftsmanship and your personal preferences. From outerwear to knitwear, shoes, socks and ties - create your favorite Brioni
            model in the perfect color and design and make it unique by adding your initials."
        link="Explore"
      />
    </div>
  );
}