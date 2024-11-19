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
        <div className="LogoBannerContainer">
          <div className="top-section-banner projects-top-section-banner projects-fix-top-pos">
            {image && (
              <img
                src={image}
                className="projects-main-image-logop"
                alt="Zespół, którego misja to projektowanie logo dla firm"
                title="Zespół, którego misja to projektowanie logo dla firm"
              />
            )}
          </div>

          <div className="col-xl-6 col-46 projects-top-banner-container">
            <div className="top-banner-text projects-top-banner-text">
              <h1 className="top-banner-title projects-top-banner-title projects-top-title-mright">
                {title && title}
              </h1>
              <h2 className="top-banner-long-text projects-top-banner-long-text">
                <strong>{subtitle && subtitle}</strong>
              </h2>
            </div>
          </div>

          <div className="col-xl-6 col-46 projects-top-banner-container">
            <div className="projects-under-top-banner-text">
              <p>{text && text}</p>
            </div>
          </div>

          <div className="col-xl-12 part-sec">
            <div className="catalog-submit-button text-left projects-catalog-submit-buttom">
              <button
                className="download-catalog-button-2 projects-download-catalog-button send-offer-button js--triggerAnimation"
                type="button"
                fdprocessedid="k9dho"
                onClick={openModal}
              >
                <strong>{buttontext && buttontext}</strong>
              </button>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </section>
    </>
  );
};

export default LogoBanner;
