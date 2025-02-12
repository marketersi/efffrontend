import React from "react";
import Modal from "react-modal";
import "./cennik-modal.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const CennikModal = ({ isOpen, onRequestClose }) => {

  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { metadata  } = screenData?.cardMenu?.menuOne?.formOne || {};
  const { modalInfo  } = metadata || {};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal for Last Option"
      className="form1Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        content: {
          color: "white",
          borderRadius: "30px",
          border: "none",
          width: "40%",
          margin: "50px auto",
          maxHeight: "450px",
          padding: " 90px 50px",
          backgroundColor: "rgb(12 12 12)",
          overflow: "hidden",
        },
      }}
    >
      <div className="cennik-modal-content">
        <h2 className="cennik-modal-title">{modalInfo?.modal_title}</h2>
        <p>
          {modalInfo?.modal_info}
        </p>
        <p>
        {modalInfo?.modal_info_2}
        </p>
        <div>
          <button className="cennik-modal-btn">
            <Link href="/">
            {modalInfo?.modal_button1Text}
            </Link>
          </button>
          <button className="cennik-modal-btn" onClick={onRequestClose}>
            {modalInfo?.modal_button2Text}
          </button>
        </div>
      </div>

      <button onClick={onRequestClose} className="cennik-modal-close">
        x
      </button>
    </Modal>
  );
};

export default CennikModal;
