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
        <div className="top-section-banner-text container-fluid1 UXBannerContainer">
          <div className="row">
            <div className="col-md-6">
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
                  Przyszłość z
                  <br />
                  Marketersi: Nazwy,
                  <br />
                  Które Definiują Sukces
                </h1>
                <h2 className="names-top-banner-long-text ">
                  Nasze nazwy nie tylko przyciągają uwagę, ale{" "}
                  <span className="indent-20">
                    pozostają w pamięci na lata. Tworzymy nazwy,{" "}
                  </span>
                  <span className="indent-40">
                    które opowiadają Twoją historię, budują zaufanie
                  </span>
                  <span className="indent-60">
                    i otwierają drzwi do sukcesu.
                  </span>
                </h2>
                <h2 className="top-banner-long-text names-top-banner-long-text pnazw-second-maintext">
                  Gwarantujemy 100% satysfakcji – tworzymy, aż Cię{" "}
                  <span className="underlineText">zachwycimy</span>
                </h2>
              </div>
              <div className="catalog-submit-button text-left projects-catalog-submit-buttom">
                <button
                  className="download-catalog-button nazwaHeroBtn"
                  type="button"
                  onClick={() => setIsModal(true)}
                >
                  Brzmi świetnie. Wyślijcie mi ofertę
                </button>
              </div>
            </div>
            <div className="col-md-6">
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
