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
      <div className="nazwaContainer">
        <div className="top-section-banner-text container-fluid1 UXBannerContainer banner-nazwa">
          <div className="row">
            <div className="col-md-7">
              <div className="top-banner-text projects-top-banner-text naming-top-banner-text">
                {/* <h1 className="top-banner-title projects-top-banner-title pnazw-topbanner-title">
                Nazwij Swoją <span className="indent-20">
                Przyszłość z</span> 
                <span className="indent-40">
                Marketersi:</span> <span className="indent-60">
                Nazwy, Które</span> <span className="indent-80">
                Definiują</span> 
                <span className="underlineText indent-100">
                Sukces
                </span>
                </h1> */}
                <h1 className="top-banner-title projects-top-banner-title pnazw-topbanner-title">
                  Nazwij Swoją
                  <br />
                  Przyszłość
                  <br />
                  z Marketersi. <br /> Nazwy, Które <br /> Definiują Sukces.
                </h1>
                <h2 className="nazwa-heading">
                  Nasze nazwy <br /> nie tylko przyciągają uwagę, <br /> ale
                  pozostają w pamięci na lata.
                </h2>
                <h2 className="nazwa-heading">
                  Gwarantujemy 100% satysfakcji – tworzymy, aż Cię zachwycimy
                </h2>
              </div>
              <div className="catalog-submit-button text-left projects-catalog-submit-buttom">
                <button
                  className="download-catalog-button nazwaHeroBtn banner-btn"
                  type="button"
                  onClick={() => setIsModal(true)}
                >
                  Brzmi świetnie. Wyślijcie mi ofertę
                </button>
              </div>
            </div>
            <div className="col-md-5">
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
              <img
                src={heroSection?.background_video}
                alt=""
                className="nazwaHeroImg"
              />
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
