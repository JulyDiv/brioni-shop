import "../../styles/style.sass";
import "swiper/css/bundle";
import { Layout } from "../components/Layout";
import useIsOrder from "../hooks/useIsOrder";
import { useOrders } from "../hooks/useOrders";
import { AppWrapper } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const order = useOrders();
  const isOrder = useIsOrder();
  return (
    // <Component {...pageProps} />
    <AppWrapper {...order} {...isOrder} jacket={pageProps?.jacket} >
      <Layout {...order} {...isOrder}>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
