import "../../styles/style.sass";
import "swiper/css/bundle";
import { Layout } from "../components/Layout";
import { useLabelOrder } from "../hooks/useLabelOrder";
import { useLabelSelect } from "../hooks/useLabelSelect";
import { useCount } from "../hooks/useCount";
import { useColor } from "../hooks/useColor";
import { useSize } from "../hooks/useSize";
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
  useIsErrorModalColor,
  useIsErrorModalSize,
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
  const color = useColor();
  const size = useSize();
  const isErrorModalColor = useIsErrorModalColor();
  const isErrorModalSize = useIsErrorModalSize();
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
      {...color}
      {...size}
      {...isErrorModalColor}
      {...isErrorModalSize}
      jacket={pageProps?.jacket}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
