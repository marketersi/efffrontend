import React from "react";
import "./logo.css";
import { useSelector } from "react-redux";

const LogoBanner = ({ openModal }) => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { LogoBannerData } = screenData || {};
  const { image, title, subtitle, text, buttontext } = LogoBannerData || {};

  return (
    <>
      <section>
        <div className="container1 UXBannerContainer">
          <div className="LogoBannerContainer row">
            <div className="col-md-7 projects-top-banner-container">
              <div className="top-banner-text projects-top-banner-text">
                <h1 className="top-banner-title projects-top-banner-title projects-top-title-mright">
                  Tworzymy
                  <span className="indent-20">Które Zapada w</span>
                  <span className="indent-40">Pamięć i Buduje</span>
                  <span className="indent-60">Zaufanie</span>
                </h1>

                <h2 className="top-banner-long-text projects-top-banner-long-text">
                  <span className="underlineText">
                    Gwarantujemy 100% satysfakcji
                  </span>{" "}
                  – tworzymy, aż Cię zachwycimy
                </h2>
                <p>
                  "
                  <span className="underlineText">
                    Twoje logo jest wizytówką
                  </span>{" "}
                  Twojej marki. Powinno inspirować zaufanie od pierwszego
                  spojrzenia." - Laura Busche
                </p>

                <div className="catalog-submit-button text-left projects-catalog-submit-buttom">
                  <button
                    className="download-catalog-button-2 projects-download-catalog-button send-offer-button js--triggerAnimation"
                    type="button"
                    fdprocessedid="k9dho"
                    onClick={openModal}
                  >
                    Brzmi świetnie. Wyślijcie mi ofertę
                  </button>
                </div>
              </div>
            </div>
            <div className="top-section-banner projects-top-section-banner projects-fix-top-pos col-md-5">
              {image && (
                <img
                  src={image}
                  className="projects-main-image-logop"
                  alt="Zespół, którego misja to projektowanie logo dla firm"
                  title="Zespół, którego misja to projektowanie logo dla firm"
                />
              )}
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoBanner;
