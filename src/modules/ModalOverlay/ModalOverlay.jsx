import React from "react";

export const ModalOverlay = ({
  setIsOrder,
  setIsContact,
  setIsThank,
  isOrder,
  isContact,
  isThank,
}) => {
  const closeModal = () => {
    if (isOrder) {
      setIsOrder(false);
    } else if (isContact) {
      setIsContact(false);
    } else if (isThank) {
      setIsThank(false);
    }
  };
  return (
    <>
      <div className="modal-overlay" onClick={() => closeModal()}></div>
    </>
  );
};
