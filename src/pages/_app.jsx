import "../../styles/style.sass";
import "swiper/css/bundle";
import { Layout } from "../components/Layout";
import useIsOrder from "../hooks/useIsOrder";
import useIsOpenCard from "../hooks/useIsOpenCard";
import useLabelOrder from "../hooks/useLabelOrder";
import { useOrders } from "../hooks/useOrders";
import { AppWrapper } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const order = useOrders();
  const isOrder = useIsOrder();
  const isOpenCard = useIsOpenCard();
  const labelOrder = useLabelOrder();
  return (
    // <Component {...pageProps} />
    <AppWrapper
      {...order}
      {...isOrder}
      {...isOpenCard}
      {...labelOrder}
      jacket={pageProps?.jacket}
    >
      <Layout {...order} {...isOrder} {...labelOrder}>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
