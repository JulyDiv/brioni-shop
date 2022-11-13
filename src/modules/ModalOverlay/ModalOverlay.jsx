import React from "react";

export const ModalOverlay = ({ setIsOrder }) => {
    const closeModal = () => {
        setIsOrder(false);
    }
    return (
        <div className="modal-overlay" onClick={() => closeModal()}></div>
    )
}