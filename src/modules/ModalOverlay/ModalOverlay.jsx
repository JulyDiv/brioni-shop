import React from "react";

export const ModalOverlay = ({
  setIsOrder,
  setIsContact,
  setIsThank,
  setIsMenuMobile,
  isMenuMobile,
  isOrder,
  isContact,
  isThank,
  isSelect,
  setIsSelect
}) => {
  const closeModal = () => {
    if (isOrder) {
      setIsOrder(false);
    } else if (isContact) {
      setIsContact(false);
    } else if (isThank) {
      setIsThank(false);
    } else if (isMenuMobile) {
      setIsMenuMobile(false);
    } else if (isSelect) {
      setIsSelect(false);
    }
  };
  return (
    <>
      <div className="modal-overlay" onClick={() => closeModal()} style={{ zIndex: isMenuMobile === true ? "0" : "" }}></div>
    </>
  );
};
