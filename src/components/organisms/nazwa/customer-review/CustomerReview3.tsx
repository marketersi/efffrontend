import React, { useState } from "react";
import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";
import { useSelector } from "react-redux";

const CustomerReview3 = () => {
  const {  screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { customer_review } = implementation?.example4 || {};

  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };
  return (
    <section className="projects-gray-opinion-4">
      <div className="container projects-opinion-box-container">
        <div className="row">
          <div className="col-md-12">
            <div className="opinion-box">
              <div className="opinion-box-image">
                <img
                  className="opinion-box-inside-image"
                  src={customer_review?.customer_image}
                  title="Mężczyzna-stolarstwo-robisz to"
                  alt="Mężczyzna i stolarstwo"
                />
              </div>
              
              <div className="opinion-box-content projects-opinion-5 projects-opinion-1-new naming-opinion-text naming-opinion-img">
                <p className="theme-desc projects-client-opinion-p text-center">
                  <strong>{customer_review?.customer_quote}</strong>
                </p>
                <div className="opinion-box-text">
                 {customer_review?.customer_description}
                </div>
                <button
                  className="download-catalog-button names-new-btn send-offer-button  js--triggerAnimation pnazw-opinion-btn"
                  type="button"
                  onClick={() => setIsModal(true)}
                >
                  <strong>{customer_review?.review_buttonText}</strong>
                </button>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </section>
  );
};

export default CustomerReview3;
