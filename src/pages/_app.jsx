import "../../styles/style.sass";
import "swiper/css/bundle";
import { Layout } from "../components/Layout";
import { useLabelOrder } from "../hooks/useLabelOrder";
import { useLabelSelect } from "../hooks/useLabelSelect";
import { useCount } from "../hooks/useCount";
import { useOrders } from "../hooks/useOrders";
import { useSelects } from "../hooks/useSelects";
import { AppWrapper } from "../context/AppContext";
import {
  useIsContact,
  useIsThank,
  useIsMenuMobile,
  useIsOpenCard,
  useIsOrder,
  useIsSelect,
} from "../hooks/useIs";

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
  const isSelect = useIsSelect();
  const selects = useSelects();
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
      {...isSelect}
      {...selects}
      jacket={pageProps?.jacket}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
