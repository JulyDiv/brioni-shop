import Head from 'next/head'
import { Preloader } from "../modules/Preloader/Preloader";
import { Header } from "../modules/Header/Header";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Brioni Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Preloader /> */}
      <Header />
    </div>
  );
}
