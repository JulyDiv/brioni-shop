import "../../styles/style.sass";
import "swiper/css/bundle";
import { Layout } from "../components/Layout";
//import { useIsOrder } from "../hooks/useIsOrder";
//import { useIsOpenCard } from "../hooks/useIsOpenCard";
import { useLabelOrder } from "../hooks/useLabelOrder";
import { useLabelSelect } from "../hooks/useLabelSelect";
import { useCount } from "../hooks/useCount";
import { useOrders } from "../hooks/useOrders";
import { AppWrapper } from "../context/AppContext";
import {
  useIsContact,
  useIsThank,
  useIsMenuMobile,
  useIsOpenCard,
  useIsOrder,
} from "../hooks/useIsOpenModal";

function MyApp({ Component, pageProps }) {
  const order = useOrders();
  const isOrder = useIsOrder();
  const isOpenCard = useIsOpenCard();
  const labelOrder = useLabelOrder();
  const labelSelect = useLabelSelect();
  const counter = useCount();
  const isThank = useIsThank();
  const isContact = useIsContact();
  const isMenuMobile = useIsMenuMobile();
  return (
    <AppWrapper
      {...order}
      {...isOrder}
      {...isOpenCard}
      {...labelOrder}
      {...labelSelect}
      {...counter}
      {...isThank}
      {...isContact}
      {...isMenuMobile}
      jacket={pageProps?.jacket}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
