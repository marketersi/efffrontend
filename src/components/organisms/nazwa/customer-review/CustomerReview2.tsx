import React, { useState } from "react";
import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";
import { useSelector } from "react-redux";

const CustomerReview2 = () => {
  const { screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { customer_review } = implementation || {};

  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };

  return (
    <section className="projects-gray-opinion-5">
      <div className="container projects-opinion-box-container">
        <div className="row">
          <div className="col-md-12">
            <div className="opinion-box">
              <div className="opinion-box-image">
                <img
                  className="opinion-box-inside-image"
                  src={customer_review?.customer_image}
                  title="Założyciel Carmnik zadowolony z nowej nazwy"
                  alt="Klient przekonał się, że można stworzyć dobrą nazwę"
                />
              </div>

              <div className="opinion-box-content projects-opinion-4 naming-opinion-text">
                <p className="theme-desc projects-client-opinion-p text-center">
                  <strong>{customer_review?.customer_quote}</strong>
                </p>
                <div className="opinion-box-text">
                  {customer_review?.customer_description}
                </div>
                {/* <div className="quoteBtn btn-hover"> */}
                  <button
                    className="download-catalog-button names-new-btn send-offer-button js--triggerAnimation pnazw-opinion-btn"
                    type="button"
                    onClick={() => setIsModal(true)}
                  >
                    {customer_review?.review_buttonText}
                  </button>
                {/* </div> */}
              </div>
              <div className="clearfix"></div>
            </div>
          </div>

          {/* <div className="col-md-12 projects-empty-opinion-box"></div> */}
        </div>
      </div>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </section>
  );
};

export default CustomerReview2;
