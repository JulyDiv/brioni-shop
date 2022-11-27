import "../../styles/style.sass";
import "swiper/css/bundle";
import { Layout } from "../components/Layout";
import useIsOrder from "../hooks/useIsOrder";
import useIsOpenCard from "../hooks/useIsOpenCard";
import useLabelOrder from "../hooks/useLabelOrder";
import useLabelSelect from "../hooks/useLabelSelect";
import useCount from "../hooks/useCount";
import { useOrders } from "../hooks/useOrders";
import { AppWrapper } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const order = useOrders();
  const isOrder = useIsOrder();
  const isOpenCard = useIsOpenCard();
  const labelOrder = useLabelOrder();
  const labelSelect = useLabelSelect();
  const counter = useCount();
  return (
    // <Component {...pageProps} />
    <AppWrapper
      {...order}
      {...isOrder}
      {...isOpenCard}
      {...labelOrder}
      {...labelSelect}
      {...counter}
      jacket={pageProps?.jacket}
    >
      <Layout {...order} {...isOrder} {...labelOrder} {...labelSelect} {...counter}>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
