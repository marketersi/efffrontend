"use client"
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ModalForm } from "../tresci-sprzedazowe/ModalForm";

const IgnoreSitesData = {
  image:
    "https://propozycje.owocni.pl/ux/Maciej-Projektant-UX-Designer.5591062d.webp",
  title: "Ludzie ignorują strony, które ignorują ludzi...",
  description1: "descriptions",
  description2: "descriptions",
};

const IgnoreSites = () => {
  const { screenData } = useSelector((state) => state.ux);
  const IgnoreSites = screenData.IgnoreSites || {};
  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <section>
        <div id="maciej">

          <div className="contentText">
            <h2>{IgnoreSites.title}</h2>
            <p>{IgnoreSites.descript1}</p>
            <p>{IgnoreSites.descript2}</p>
            <a
              className="btn-neon send-offer-button js--triggerAnimation"
              onClick={() => setIsModal(true)}
            >
              Zapytaj o makietę dla siebie
              <div
                className="light"
                style={{ transform: "rotate(120deg) scale(0.7, 0.7)" }}
              ></div>
            </a>
            
          </div>
        </div>
      </section>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </>
  );
};

export default IgnoreSites;
