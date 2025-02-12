import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";

const CustomerReview = () => {
  const {  screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { example1 } = implementation || {};
  console.log(implementation);
  

  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };
  return (
    <section className="projects-gray-opinion-1">
      <div className="container projects-opinion-box-container">
        <div className="row">
          <div className="col-md-12">
            <div className="opinion-box">
              <div className="opinion-box-image opinion-box-image-right right-image-opinion-fix custom-text-align-right">
                <img
                  className="opinion-box-inside-image"
                  src={example1?.image_4}
                  title="Kobieta zadowolona z efektu tworzenia nazwy dla firm"
                  alt="Klientka zadowolona z procesu jakim jest tworzenie nazw"
                /> 
              </div>
             
              <div className="opinion-box-content opinion-box-content-left projects-opinion-1 naming-opinion-text">
                <p className="theme-desc projects-client-opinion-p text-center">
                  <strong>{example1?.customer_quote}</strong>
                </p>
                <div className="opinion-box-text">
                  {example1?.customer_description}
                </div>
                <div className="">
                <button
                  className="download-catalog-button names-new-btn send-offer-button  js--triggerAnimation pnazw-opinion-btn"
                  type="button"
                  onClick={() => setIsModal(true)}
                >
                  Brzmi świetnie. Wyślijcie mi ofertę
                </button>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-md-12 projects-empty-opinion-box"></div>
        </div>
      </div>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </section>
  );
};

export default CustomerReview;


