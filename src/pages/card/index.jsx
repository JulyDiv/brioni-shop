import { CardModal } from "../../modules/CardModal/CardModal";
import { useState } from "react";
import useIsOpenCard from "../../hooks/useIsOpenCard";
import { Complete } from "../../modules/Complete/Complete";

const CardPage = () => {
    const isOpenCard = useIsOpenCard();
    // const [isOpenCard, setIsOpenCard] = useState(false);
  return (
    <>
      {/* {isOpenCard.isOpenCard && <CardModal {...isOpenCard} />} */}
      <CardModal {...isOpenCard} />
      <Complete />
    </>
  );
}

export default CardPage;