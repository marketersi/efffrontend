import React from 'react';
import { useSelector } from 'react-redux';

const StepByStep = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { StepBystepData } = screenData || {};
  const {
    title,
    subtitle,
    image,
    imageTitle,
    imageSubTitle,
    secondaryImage,
    secondaryImageTitle,
    secondaryImageSubtitle,
    secondaryImageSubtitle2,
    bannerImage,
    bannerImageTitle,
    bannerImageSubtitle,
  } = StepBystepData || {};

  return (
    <>
      <section className="thematic-section projects-gray-background" id="sec4">
        <div className="container projects-custom-container1 menu-target">
          <div className="row">
            <div className="col-md-12">
              <h3 className="projects-krok-po-kroku no-after p-bottom-10">
                {title && title}
              </h3>

              <p className="theme-desc text-center p-0 projects-under-big-header3">
                {subtitle && subtitle}
              </p>
            </div>
          </div>
          <div className="container custom-container1"></div>
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle">
                {imageTitle && imageTitle}
              </h5>
            </div>
          </div>
        </div>

        {/* {image && (
          <img
            src={image}
            className="img-background-logop"
            alt="Projekt logo dla nowo powstącej sieci lokali gastronomicznych"
            title="Projekt logo dla nowo powstącej sieci lokali gastronomicznych"
          />
        )} */}

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {imageSubTitle && imageSubTitle}
              </h3>
            </div>

            <div className="col-md-12 projects-push-content-top">
              <p className="theme-desc projects-theme-desc-p projects-push-top-50">
                {secondaryImageTitle && secondaryImageTitle}
              </p>
              <div className="mb-4 image-810">
                {secondaryImage && (
                  <img
                    src={secondaryImage}
                    className="appetime-img-p appetime-img w-100"
                    alt="Wykonanie specjalnego projektu logo"
                    title="Przykłady tego, co potrafi projektowanie graficzne w przypadku logo"
                  />
                )}
              </div>

              <p className="theme-desc projects-theme-desc-p">
                {secondaryImageSubtitle && secondaryImageSubtitle}
              </p>
              <p className="theme-desc projects-theme-desc-p">
                {secondaryImageSubtitle2 && secondaryImageSubtitle2}
              </p>
            </div>

            {/* <div
              className="col-md-12 projects-custom-text-inside-img-2 projects-appetime-hide-img z-index-2"
              style={{ marginBottom: "-430px" }}
            >
              <h5 className="theme-quote signed-quote signed-quote-image margin-right-74">
              
                {bannerImageTitle && bannerImageTitle}
              </h5>

              <p className="signature projects-rwd-push">
                {bannerImageSubtitle && bannerImageSubtitle}
              </p>
            </div> */}
          </div>
        </div>

        <div
          className="image-810-container"
          style={{ zIndex: 1, marginTop: 0 }}
        >
          {/* <div className="image-810">
       
            {bannerImage && (
              <img
                src={bannerImage}
                className="desktop-810 position-relative appeImg"
                alt="Tworzenie identyfikacji wizualnej i wizytówki"
                title="Jak stworzyć własne logo na przykładzie Appetime"
                style={{
                  position: "relative",
                  left: "-450px",
                  maxWidth: "none",
                }}
              />
            )}
            <img
              src="/assets/images/logo-design/Wlasne-logo-Appetime-MOB.jpg.webp"
              className="mobile-810"
              alt="Tworzenie identyfikacji wizualnej i wizytówki"
              title="Jak stworzyć własne logo na przykładzie Appetime"
            />
          </div> */}
        </div>

        <div className="clearfix"></div>
      </section>
    </>
  );
};

export default StepByStep;
