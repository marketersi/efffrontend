import Image from "next/image";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { ModalForm } from "../tresci-sprzedazowe/ModalForm";

const MainHeading = () => {
  const { isLoading, screenData } = useSelector((state) => state.strategy);

  const { hero } = screenData;
  const [isModal, setIsModal] = useState(false);
  
    const handleModalClose = () => {
      setIsModal(!isModal);
    };


  return (
    <>
    <div className="MainHeading content">
      <div className="MainHeading_Container full row p-0">
        <div className="mainHeadingContent col-md-6">
          <div className="MainHeading_Title">
            <span>{hero?.title && hero.title.split(" ")[0]}</span>
          </div>
          <div className="MainHeading_SecondTitle">
          Twój kompas <br/>   w świecie <br/>sprzedaży
          </div>
          <div className="MainHeading_Content ">
          Twoja firma jest ważna, <span className="d-block">zróbmy ją skuteczniejszą.</span>
          </div>
          <div className="catalog-submit-button projects-catalog-submit-buttom logo-button-box">
          <button
            className="download-catalog-button projects-download-catalog-button send-offer-button rwd-logo-button-box js--triggerAnimation"
            type="button"
            onClick={() => setIsModal(true)}
          >
            Brzmi świetnie. Wyślijcie mi ofertę
          </button>
        </div>
        </div>
        <div className="MainHeading_Image col-md-6">
          <Image
            src={hero?.image_url}
            alt="MainHeadingImage"
            width={755}
            height={512}
          />
        </div>
      </div>
    </div>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
      </>
    
  );
}
export default MainHeading;