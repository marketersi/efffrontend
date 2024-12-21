import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalForm } from '../ModalForm';
import ReactPlayer from "react-player";

const SalesBanner = () => {
  const { screenData } = useSelector((state) => state.sales);
  const { heroSection } = screenData || {};

  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <section className="sales_banner copywriter-page">
        <div className="container">
          
          <div className="top-section-banner-text">
            <div className="row align-items-center">
              <div className="col-md-6 col-46 names-top-banner-container">
                <div className="top-banner-text projects-top-banner-text">
                  <h1 className="top-banner-title copywriter-top-banner-title">
                    {heroSection?.main_title}
                  </h1>
                  <h2 className="top-banner-long-text copywriter-top-banner-long-text underlineText">
                    {heroSection?.sub_title}
                  </h2>
                </div>
                <div className="part-sec old-btn">
                  <button
                    onClick={() => setIsModal(true)}
                    className="btn btn-green send-offer-button js--triggerAnimation"
                  >
                    Brzmi świetnie. Wyślijcie mi ofertę.
                  </button>
                </div>
              </div>
              <div className="col-md-6">
            {/* <img
              style={{ maxWidth: '100%' }}
              src={heroSection?.image}
              className=""
              title="Owocni wiedzą, jak się pisze teksty na stronę"
              alt="Uśmiechnięci copywriterzy"
            /> */}
            <ReactPlayer
                            url={heroSection?.image}
                            playing={true}
                            loop={true}
                            width="100%"
                            height="auto"
                            muted={true}
                            pip={false}
                            playsinline
                            style={{ margin: "0 auto" }}
                          />
          </div>
              
            </div>
          </div>
        </div>
        <ModalForm isOpen={isModal} onClose={handleModalClose} />
      </section>
    </>
  );
};

export default SalesBanner;
