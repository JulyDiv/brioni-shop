import React from "react";

export const ModalOverlay = ({ setIsOpenCard }) => {
    const closeModal = () => {
        setIsOpenCard(false);
    }
    return (
        <div className="modal-overlay" onClick={() => closeModal()}></div>
    )
}