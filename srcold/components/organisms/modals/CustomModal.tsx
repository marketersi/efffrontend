import React from "react";
import Modal from "react-modal";
import "./cennik-modal.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const CustomModal = ({ isOpen, onRequestClose }) => {
  const {  screenData } = useSelector((state) => state.priceList);
  const { modal } = screenData?.cardMenu?.MenuTwo?.Form?.Section2 || {};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal for Last Option"
       className="form2Modal"
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
          backgroundColor: "black",
        },
      }}
    >
      <div className="cennik-modal-content">
        <h2 className="cennik-modal-title">{modal?.title}</h2>
        <p>
          {modal?.description}
        </p>

        <button className="custom-modal-btn">
          <Link href="/">{modal?.button}</Link>
        </button>
      </div>
      <button onClick={onRequestClose} className="cennik-modal-close">
        x
      </button>
    </Modal>
  );
};

export default CustomModal;
