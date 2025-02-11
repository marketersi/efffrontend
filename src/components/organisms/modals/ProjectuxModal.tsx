import React from "react";
import Modal from "react-modal";
import "./cennik-modal.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import CardOne from "../cennik/menu-one/CardOne";

const CustomModal = ({ isOpen, onRequestClose }) => {
  const priceList = useSelector((state) => state.priceList);
  console.log(priceList, "pricelist");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal for Last Option"
      className="form2Modal cennikFormCard1 mt-4"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        
        content: {
          borderRadius: "30px",
          border: "none",
          margin: "50px auto",
          
        },
      }}
    >
      <div className="cennik-modal-content1">
        <CardOne />
      </div>
      <button onClick={onRequestClose} className="cennik-modal-close">
        x
      </button>
    </Modal>
  );
};

export default CustomModal;
