import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./nazwa-hero.css";
import { useSelector } from "react-redux";
import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";

const NazwaHero = () => {
  const { screenData } = useSelector((state) => state.anatomy);
  const { heroSection } = screenData || {};

  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };
  return (
    <section className="pnazw-page">
      <div className="nazwaContainer ">
        <div className="top-section-banner-text">
          <div className="row">
            <div className="col-lg-12 order-2">
              <div className="top-banner-text projects-top-banner-text naming-top-banner-text">
                <h1 className="top-banner-title projects-top-banner-title pnazw-topbanner-title">
                  {heroSection?.title}
                </h1>
                <h2 className="top-banner-long-text names-top-banner-long-text text-center">
                  {heroSection?.subtitle1}
                </h2>
                <h2 className="top-banner-long-text names-top-banner-long-text pnazw-second-maintext text-center">
                  {heroSection?.subtitle2}
                </h2>
              </div>
              <div className="catalog-submit-button text-left projects-catalog-submit-buttom">
                <button
                  className="download-catalog-button nazwaHeroBtn"
                  type="button"
                  onClick={() => setIsModal(true)}
                >
                  <strong>Wyślijcie mi niezobowiązującą ofertę</strong>
                </button>
              </div>
            </div>
            <div className="col-lg-12  order-1">
              {/* <ReactPlayer
                url={heroSection?.background_video}
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="auto"
                className="heroVideo"
                playsinline
              /> */}
              <img src={heroSection?.background_video} alt="" className="nazwaHeroImg"/>
            </div>

            <div className="col-md-12 part-sec"></div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </section>
  );
};

export default NazwaHero;
